import { DB_PAGES } from "../config.ts";
import { Page } from "../models/page.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { fetchData, persistData } from "./db.ts";

type PageData = Pick<
  Page,
  "title" | "menuIndex" | "keywords" | "description" | "content"
>;

export const getPages = async (): Promise<Page[]> => {
  const pages = await fetchData(DB_PAGES);

  return pages.sort((a, b) => a.menuIdex - b.menuIdex);
};

export const getPage = async (pageId: string): Promise<Page | undefined> => {
  const pages = await fetchData(DB_PAGES);

  return pages.find(({ id }) => id === pageId);
};

export const createPage = async (
  pageData: PageData,
): Promise<{ title: string; id: string }> => {
  const pages = await fetchData(DB_PAGES);
  const pageIds = pages.map((page) => page.id);
  let newPage: any = {};
  Object.entries(pageData).forEach(([key, val]) => {
    const obj: any = {};
    obj[key] = val;
    newPage = Object.assign({}, newPage, obj);
  });
  // newPage = {
  //   id: v4.generate(),
  //   title: pageData.title,
  //   menuIndex: pageData.menuIndex,
  //   keywords: pageData.keywords,
  //   description: pageData.description,
  //   content: pageData.content,
  // };
  newPage["id"] = v4.generate();

  await persistData(DB_PAGES, [...pages, newPage]);

  return {
    title: newPage.title,
    id: newPage.id,
  };
};

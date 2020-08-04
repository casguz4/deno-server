import getPages from "./getPages.ts";
import getPageDetails from "./getPageDetails.ts";
import createPage from "./createPage.ts";

export default () => {
  return {
    CreatePage: createPage,
    // DeletePage,
    GetPageDetails: getPageDetails,
    GetPages: getPages,
    // UpdatePage,
  };
};

export interface Page {
  id: string;
  title: string;
  menuIndex: number;
  keywords?: string;
  description?: string;
  content?: string;
  parentId?: number;
  childPages?: number[];
}

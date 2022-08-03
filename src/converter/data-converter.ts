import { Category, Item, Packing, Service } from "../../types/forms";

export const convertPacking = (data: any[]) => {
  return data.map((e) => {
    const curPacking: Packing = {
      id: e.id,
      ...e.attributes,
    };
    return curPacking;
  });
};

export const convertService = (data: any[]) => {
  return data.map((e) => {
    const curService: Service = {
      id: e.id,
      ...e.attributes,
    };
    return curService;
  });
};

export const convertCategoryData = (data: any[]) => {
  return data.map((e) => {
    const curCategory: Category = {
      id: e.id,
      ...e.attributes,
    };
    return curCategory;
  });
};

export const convertItemData = (data: any[]) => {
  return data.map((e) => {
    const categoryRefs = convertCategoryData(e.attributes.categories.data);

    const curItem: Item = {
      id: e.id,
      name: e.attributes.name,
      sortorder: e.attributes.sortorder,
      volume: e.attributes.volume,
      step: e.attributes.step,
      categoryRefs,
    } as Item;
    return curItem;
  });
};

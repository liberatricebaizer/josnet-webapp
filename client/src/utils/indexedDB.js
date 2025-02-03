import localforage from "localforage";

const DB_NAME = "myApp";

export const saveSeller = async (seller) => {
  await localforage.setItem("seller", seller);
};

export const loadSeller = async () => {
  return await localforage.getItem("seller");
};

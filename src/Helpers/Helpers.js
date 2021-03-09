/**
 * Helpers Functions
 */
import SecureLS from "secure-ls";

var ls = new SecureLS();
/*
 * set data in Local storage in encrypt mode
 */
export function setToLocalStorage(key, data) {
  ls.set(key, data);
}
/*
 * get data from local storage
 */
export function getFromLocalStorage(key) {
  let dataFromStorage = ls.get(key);
  return dataFromStorage;
}

/*
 * remove data from local storage
 */
export function removeFromLocalStorage(key) {
  ls.remove(key);
}
/*
 * remove all keys from storage
 */
export function removeAllFromLocalStorage() {
  ls.removeAll();
}

class AppStorage {
  store(key, value) {
    localStorage.setItem(key, value);
  }

  clear(key) {
    localStorage.removeItem(key);
  }

  get(key) {
    return localStorage.getItem(key);
  }
}
export default AppStorage = new AppStorage();

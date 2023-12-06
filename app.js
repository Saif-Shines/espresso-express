import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";

window.app = Object.create({});
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
});

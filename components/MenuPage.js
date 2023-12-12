class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    loadCSS();
    async function loadCSS() {
      const request = await fetch("/components/MenuPage.css");
      const css = await request.text();
      styles.textContent = css;
    }
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appmenuchange", () => {
      console.info("app menu change envent");
      this.render();
    });
  }

  render() {
    if (app.store.menu) {
      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
        <h3>${category.name}</h3>
        <ul class="category"></ul>
        `;
        this.root.querySelector("#menu").appendChild(liCategory);
      }
    } else {
      this.querySelector("#menu").innerHTML = `Loading...`;
    }
  }
}

customElements.define("menu-page", MenuPage);

export default MenuPage;

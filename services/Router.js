const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Link Clicked");
      });
    });
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
  },
};

export default Router;

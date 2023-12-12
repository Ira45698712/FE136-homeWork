(function () {
  function tabs(selector) {
    const containers = document.querySelectorAll(selector);

    function tabController(container) {
      let buttons = container.querySelector(".all__button");
      let contents = container.querySelector(".all__content");

      let changeText = (num) => {
        [...contents.children].forEach((el, i) => {
          if (num === i) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      };

      const buttonHandler = (event) => {
        let button = event.target;
        if (button.classList.contains("button")) {
          [...buttons.children].forEach((elem, i) => {
            if (elem === button) {
              elem.classList.add("active");
              changeText(i);
            } else {
              elem.classList.remove("active");
            }
          });
        }
      };
      buttons.addEventListener("click", (event) => buttonHandler(event));
    }
    if (containers) {
      containers.forEach((container) => tabController(container));
    }
  }
  tabs(".tab__container");

  document.querySelectorAll(".accordion").forEach((el) => {
    el.addEventListener("click", () => {
      let content = el.nextElementSibling;
      if (content.style.maxHeight) {
        document
          .querySelectorAll(".content2")
          .forEach((el) => (el.style.maxHeight = null));
      } else {
        document
          .querySelectorAll(".content2")
          .forEach((el) => (el.style.maxHeight = null));
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  const filterBox = document.querySelectorAll(".box");
  document.querySelector("nav").addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;

    let filterClass = event.target.dataset["f"];
    //console.log(filterClass);
    filterBox.forEach((elem) => {
      elem.classList.remove("hide");
      if (!elem.classList.contains(filterClass) && filterClass !== "all") {
        elem.classList.add("hide");
      }
    });
  });
})();

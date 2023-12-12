(function () {
    function tabs(selector) {
function tabController(container) {
let buttons = container.querySelector('.all__button');
let contents = container.querySelector('.all__content');

let changeText = (num) => {
    [...contents.children].forEach((el, i) => {
        if(num === i){
            el.classList.add('active');
        }else{
            el.classList.remove('active');
        }
    })
}
const buttonHandler = (event) => {
    let button = event.target;
    if (button.classList.contains("button")) {
      //@ts-ignore
      [...buttons.children].forEach((elem, i) => {
        if (elem === button) {
          elem.classList.add("active");
          contentChange(i);
        } else {
          elem.classList.remove("active");
        }
      });
    }
  };
  buttons.addEventListener("click", (event) => buttonHandler(event));

if (containers) {
  containers.forEach((container) => tabController(container));
}
}
tabs(".tab__container");
})();
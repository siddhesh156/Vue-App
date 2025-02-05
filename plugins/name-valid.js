export default {
    install: (app, options) => {
      app.component("my-header", MyHeader);
  
      app.directive("font-size", (el, binding, vnode) => {
        var size = 16;
        switch (binding.arg) {
          case "small":
            size = 12;
            break;
          case "large":
            size = 24;
            break;
          default:
            size = 18;
            break;
        }
        el.style.fontSize = size + "px";
      });
    },
  };
  
function config($stateProvider) {
  $stateProvider
    .state("index", {
      url:"/",
      controller: "ToDosController as todosCtrl",
      template: require("./view.html")
  });
}

export default config;

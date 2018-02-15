(function() {

  angular
    .module("StoryModule")
    .config(function($routeProvider) {
      $routeProvider
        .when("/display", {
          template: "<display-component></display-component>"
        })
        .when("/story", {
          template: "<story-component></story-component>"
        });
    });
})();
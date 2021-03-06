(function() {
  var storyComponent = {
    template: `
      <form ng-submit="$ctrl.seeStory($ctrl.words);">
        <input type="text" ng-model="$ctrl.words.noun" placeholder="Noun">
        <input type="text" ng-model="$ctrl.words.adjective" placeholder="Adjective">
        <input type="text" ng-model="$ctrl.words.verb" placeholder="Verb">
        <input type="text" ng-model="$ctrl.words.noun_two" placeholder="Noun">
        <input type="text" ng-model="$ctrl.words.adverb" placeholder="Adverb">
        <button type="submit">Check Your Story</button>
      </form>
    `,
    controller: function(StoryService) {
      var $ctrl = this;
      $ctrl.seeStory = function(words) {
        StoryService.setWords(words);
      };
    }
  };

  angular
    .module("StoryModule")
    .component("storyComponent", storyComponent);
})();
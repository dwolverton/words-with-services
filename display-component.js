(function() {
  var displayComponent = {
    template: `
    <p>{{ $ctrl.wordsToDisplay.noun }}</p>
    <p>{{ $ctrl.wordsToDisplay.adjective }}</p>
    <p>{{ $ctrl.wordsToDisplay.verb }}</p>
    <p>{{ $ctrl.wordsToDisplay.noun_two }}</p>
    <p>{{ $ctrl.wordsToDisplay.adverb }}</p>
    `,
    controller: function(StoryService) {
      var $ctrl = this;
      $ctrl.wordsToDisplay = StoryService.getWords();
      console.log($ctrl.wordsToDisplay);
    }
  };

  angular
    .module("StoryModule")
    .component("displayComponent", displayComponent);
})();
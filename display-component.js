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
      var vm = this;
      vm.wordsToDisplay = StoryService.sendWords();
      console.log(vm.wordsToDisplay);
    }
  };

  angular
    .module("StoryModule")
    .component("displayComponent", displayComponent);
})();
(function() {
  function StoryService() {
    var savedWordsObj = {};
    return {
      getWords: getWords,
      sendWords: sendWords
    }

    function getWords(wordsObj) {
      savedWordsObj = wordsObj;
      console.log(savedWordsObj);
    }

    function sendWords() {
      return savedWordsObj;
    }
  }

  angular
    .module("StoryModule")
    .factory("StoryService", StoryService);
})();
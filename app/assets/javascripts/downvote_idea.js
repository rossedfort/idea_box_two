function downvoteIdea() {
  $('.ideas').delegate('.downvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    if ($idea.data('qual') === "swill") {
      buildPopUp($idea, 'downvote');
    } else {
      var qualInteger = qualities.findIndex(findQual, $idea)
      qualInteger -= 1
      renderNewQuality($idea, qualInteger)
      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $idea.data('id'),
        data: {
          idea: {
            quality: qualInteger
          }
        },
        success: function() {},
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      });
    }
  });
};

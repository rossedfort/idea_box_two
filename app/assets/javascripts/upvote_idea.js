function upvoteIdea() {
  $('.ideas').delegate('.upvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    var quality = $idea.attr('data-qual');
    if (quality === "genius") {
      buildPopUp($idea, 'upvote');
    } else {
      debugger;
      var qualInteger = qualities.indexOf(quality);
      qualInteger += 1
      renderNewQuality.apply(this, [$idea, qualInteger])
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

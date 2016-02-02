function upvoteIdea() {
  $('.ideas').delegate('#upvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    if ($idea.attr('qual') === "genius") {
      alert("Can't upvote anymore")
    } else {
      qualityName   = $idea.attr('qual')
      var qualities = {0: 'swill', 1: 'plausible', 2: 'genius'}
      var newQual = parseInt($idea.attr('data-id'))
      newQual -= 1
      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $idea.attr('data-id'),
        data: {
          idea: {
            quality: newQual
          }
        },
        success: function() {
          fetchIdeas();
        },
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      });
    }
  });
};

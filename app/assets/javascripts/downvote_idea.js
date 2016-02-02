function downvoteIdea() {
  $('.ideas').delegate('#downvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    if ($idea.attr('qual') === "swill") {
      alert("Can't downvote anymore")
    } else {
      var qualities = ['swill', 'plausible', 'genius']
      var qualId = qualities.findIndex(findQual)
      function findQual(element, index, array) {
        return $idea.attr('qual') === element
      }
      qualId -= 1
      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $idea.attr('data-id'),
        data: {
          idea: {
            quality: qualId
          }
        },
        success: function() {
          $(".ideas").children().remove();
          fetchIdeas();
        },
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      });
    }
  });
};

function downvoteIdea() {
  $('.ideas').delegate('.downvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    if ($idea.data('qual') === "swill") {
      $($idea).find('p').append("<p class='popup'>Can't downvote anymore</p>")
      $('.popup').fadeOut(2000)
    } else {
      var qualId = qualities.findIndex(findQual, $idea)
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

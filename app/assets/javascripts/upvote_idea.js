function upvoteIdea() {
  $('.ideas').delegate('#upvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    if ($idea.attr('qual') === "genius") {
      alert("Can't upvote anymore")
    } else {
      // send ajax request to update quality of idea
    }
  });
};

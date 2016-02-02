function upvoteIdea() {
  $('.ideas').delegate('#upvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    
  });
};

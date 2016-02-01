function fetchIdeas(){
  var newestIdeaID = parseInt($(".idea").first().attr("data-id"))

  $.ajax({
    type:    "GET",
    url:     "/api/v1/ideas",
    success: function(ideas) {
      $.each(ideas, function(index, idea) {
        if (isNaN(newestIdeaID) || idea.id > newestIdeaID) {
          renderIdea(idea)
        }
      })
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

function fetchIdeasButton(){
  $("#fetchIdeasButton").click(function(){
    fetchIdeas();
  })
};

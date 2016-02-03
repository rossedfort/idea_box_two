function fetchIdeas(){
  var newestIdeaID = parseInt($(".idea").first().attr("data-id"))

  $.get("/api/v1/ideas").then(checkIdeasAndRenderNew).fail(error)

  function checkIdeasAndRenderNew(ideas) {
    $.each(ideas, function(index, idea) {
      if (isNaN(newestIdeaID) || idea.id > newestIdeaID) {
        renderIdea(idea)
      }
    })
  }
};

function fetchIdeasButton(){
  $("[name='button-fetch']").click(function(){
    fetchIdeas();
  })
};

function createIdea() {
  $("#createIdeaButton").click(function(){
    var ideaParams = {
      idea: {
        title: $("#ideaTitle").val(),
        body:  $("#ideaBody").val()
      }
    }
    $.post("/api/v1/ideas", ideaParams).then(newIdea).then(truncate).fail(error);

    function newIdea(idea) {
      renderIdea(idea)
      $("#ideaTitle").val("")
      $("#ideaBody").val("")
    }
  });
}

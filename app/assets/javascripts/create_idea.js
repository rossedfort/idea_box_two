function createIdea() {
  $("#createIdeaButton").click(function(){
    var ideaParams = {
      idea: {
        title: $("#ideaTitle").val(),
        body:  $("#ideaBody").val()
      }
    }
    $.post("/api/v1/ideas", ideaParams).then(newIdea).fail(error);

    function newIdea(idea) {
      renderIdea(idea)
      $("#ideaTitle").val("")
      $("#ideaBody").val("")
    }
  });
}

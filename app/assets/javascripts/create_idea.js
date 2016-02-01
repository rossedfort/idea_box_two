function createIdea() {
  $("#createIdeaButton").click(function(){
    var ideaParams = {
      idea: {
        title: $("#ideaTitle").val(),
        body:  $("#ideaBody").val()
      }
    }

    $.ajax({
      type:    "POST",
      url:     "/api/v1/ideas",
      data:    ideaParams,
      success: function(newIdea) {
        renderIdea(newIdea)
        $("#ideaTitle").val("")
        $("#ideaBody").val("")
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  });
};

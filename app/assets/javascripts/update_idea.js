function updateIdea() {
  $('.ideas').delegate('#updateIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    document.getElementById("ideaTitle" + $idea.attr('data-id')).contentEditable = true;
    document.getElementById("ideaBody" + $idea.attr('data-id')).contentEditable = true;
    
    $($idea).append("<button id='saveIdeaButton' name='button-fetch' class='btn blue btn-save'>Save</button>")

    $("#saveIdeaButton").click(function(){
      document.getElementById("ideaTitle" + $idea.attr('data-id')).contentEditable = false;
      document.getElementById("ideaBody" + $idea.attr('data-id')).contentEditable = false;
      $("#saveIdeaButton").remove();
      var ideaParams = {
        idea: {
          id: $idea.attr('data-id'),
          title: $("#ideaTitle" + $idea.attr('data-id')).text(),
          body: $("#ideaBody" + $idea.attr('data-id')).text()
        }
      }

      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $idea.attr('data-id'),
        data: ideaParams,
        success: function() {
          fetchIdeas();
        },
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      });
    });
  });
};

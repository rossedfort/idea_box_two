function updateIdea() {
  $('.ideas').delegate('.updateIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    $('#ideaTitle' + $idea.data('id')).attr('contenteditable', true);
    $('#ideaBody' + $idea.data('id')).attr('contenteditable', true);
    $($idea).append("<button class='saveIdeaButton btn blue btn-save'>Save</button>")

    $(".saveIdeaButton").click(function(){
      $('#ideaTitle' + $idea.data('id')).attr('contenteditable', false);
      $('#ideaBody' + $idea.data('id')).attr('contenteditable', false);
      $(".saveIdeaButton").remove();
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
          truncate();
        },
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      });
    });
  });
};

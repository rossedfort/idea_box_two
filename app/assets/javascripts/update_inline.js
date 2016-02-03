function updateInline() {
  $('.ideas').delegate('.idea-title', 'click', function() {
    var $idea = $(this).closest(".idea");
    $('#ideaTitle' + $idea.data('id')).attr('contenteditable', true);
    $("#ideaTitle" + $idea.data('id')).keyup(function(event){
      if(event.keyCode === 13){
        event.preventDefault();
        inlineUpdateIdea($idea);
      }
    });
  });

  $('.ideas').delegate('.idea-body', 'click', function() {
    var $idea = $(this).closest(".idea");
    $('#ideaBody' + $idea.data('id')).attr('contenteditable', true);
    $("#ideaBody" + $idea.data('id')).keyup(function(event){
      if(event.keyCode === 13){
        event.preventDefault();
        inlineUpdateIdea($idea);
      }
    });
  });
}

function inlineUpdateIdea(idea) {
  debugger;
  $('#ideaTitle' + idea.data('id')).attr('contenteditable', false);
  $('#ideaBody' + idea.data('id')).attr('contenteditable', false);
  var ideaParams = {
    idea: {
      id: idea.data('id'),
      title: $("#ideaTitle" + idea.data('id')).text(),
      body: $("#ideaBody" + idea.data('id')).text()
    }
  }
  $.ajax({
    type: 'PUT',
    url: '/api/v1/ideas/' + idea.data('id'),
    data: ideaParams,
    success: function() {
      fetchIdeas();
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  });
}

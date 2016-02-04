function updateTitleInline() {
  $('.ideas').delegate('.idea-title', 'click', function() {
    var $idea = $(this).closest(".idea");
    $('#ideaTitle' + $idea.data('id')).attr('contenteditable', true);
    $("#ideaTitle" + $idea.data('id')).keypress(function(event){
      if(event.which === 13){
        event.preventDefault();
        handleEnterKeyPress(event, $idea)
      }
    });
  });
}

function updateBodyInline() {
  $('.ideas').delegate('.idea-body', 'click', function() {
    var $idea = $(this).closest(".idea");
    $('#ideaBody' + $idea.data('id')).attr('contenteditable', true);
    $("#ideaBody" + $idea.data('id')).keypress(function(event){
      if(event.which === 13){
        event.preventDefault();
        handleEnterKeyPress(event, $idea)
      }
    });
  });
}

function inlineUpdateIdea(idea) {
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
      truncate();
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  });
}

function handleEnterKeyPress(event, idea){
  $('#ideaTitle' + idea.data('id')).attr('contenteditable', false);
  $('#ideaBody' + idea.data('id')).attr('contenteditable', false);
  inlineUpdateIdea(idea);
}

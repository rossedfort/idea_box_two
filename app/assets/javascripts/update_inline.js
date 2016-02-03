function updateInline() {
  $('.ideas').delegate('.title', 'click', function() {
    var $idea = $(this).closest(".idea");
    document.getElementById("ideaTitle" + $idea.attr('data-id')).contentEditable = true;
    $("#ideaTitle" + $idea.attr('data-id')).keyup(function(event){
      if(event.keyCode === 13){
        event.preventDefault();
        inlineUpdateIdea($idea);
      }
    });
  });

  $('.ideas').delegate('.body', 'click', function() {
    var $idea = $(this).closest(".idea");
    document.getElementById("ideaBody" + $idea.attr('data-id')).contentEditable = true;
    $("#ideaBody" + $idea.attr('data-id')).keyup(function(event){
      if(event.keyCode === 13){
        event.preventDefault();
        inlineUpdateIdea($idea);
      }
    });
  });
}

function inlineUpdateIdea(idea) {
  document.getElementById("ideaTitle" + idea.attr('data-id')).contentEditable = false;
  document.getElementById("ideaBody" + idea.attr('data-id')).contentEditable = false;
  var ideaParams = {
    idea: {
      id: idea.attr('data-id'),
      title: $("#ideaTitle" + idea.attr('data-id')).text(),
      body: $("#ideaBody" + idea.attr('data-id')).text()
    }
  }
  $.ajax({
    type: 'PUT',
    url: '/api/v1/ideas/' + idea.attr('data-id'),
    data: ideaParams,
    success: function() {
      fetchIdeas();
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  });
}

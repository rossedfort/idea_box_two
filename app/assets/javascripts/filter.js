function filter() {
  $("#filter").keyup(function(){
    $(".idea-title").filter(function(int, element){
      var title = $(element).text()
      var search = $('#filter').val()
      if (title.includes(search)) {
        $(element).parent().removeClass('hidden')
      } else {
        $(element).parent().addClass('hidden')
      }
    });
  });
};

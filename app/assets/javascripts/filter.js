function filter() {
  $("#filter").keyup(function(){
    $(".idea-title").filter(function(int, element){
      var title = $(element).text().toLowerCase();
      var search = $('#filter').val().toLowerCase();
      if (title.includes(search)) {
        $(element).parent().removeClass('hidden')
      } else {
        $(element).parent().addClass('hidden')
      }
    });
  });
};

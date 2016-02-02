function filter() {
  $("#filter").keyup(function(){
    $(".title").filter(function(int, element){
      var title = $(element).text()
      var search = $('#filter').val()
      if (title.includes(search)) {
        $(element).parent().removeClass('hidden')
      } else {
        debugger;
        $(element).parent().addClass('hidden')
      }
    });
  });
};

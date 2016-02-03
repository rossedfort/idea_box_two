function truncate(){
  $('.idea-body').each(function(){
    var text = $(this).text()
    if (text.length > 100) {
      $(this).text(text.replace(text, text.slice(0, 97) + "..."));
    }
  });
}

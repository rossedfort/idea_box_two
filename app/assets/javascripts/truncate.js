function truncate(){
  $('.idea-body').each(function(){
    var text = $(this).text()
    if (text.length > 100) {
      $(this).text(text.replace(text, $.trim($(this).text()).substring(0, 100).split(" ").slice(0, -1).join(" ") + "..." ));
    }
  });
}

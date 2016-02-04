function renderNewQuality(idea, qualityInteger) {
  debugger;
  var newQuality = qualities[qualityInteger];
  $(idea).find('.quality').replaceWith("<p class='quality'>Quality: " + newQuality + "</p>")
  var div = $(this).parent()[0]
  $(div).attr('data-qual' , newQuality);
}

function renderNewQuality(idea, qualityInteger) {
  var newQuality = qualities[qualityInteger];
  $(idea).find('.quality').replaceWith("<p class='quality'>Quality: " + newQuality + "</p>")
  $(idea).data('qual', newQuality)
}

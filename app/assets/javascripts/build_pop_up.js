function buildPopUp(idea, voteType) {
  $(idea).find('p').append("<p class='popup'>Can't " + voteType + " anymore</p>")
  $('.popup').fadeOut(2000)
}

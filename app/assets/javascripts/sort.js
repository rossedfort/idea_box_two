var clickCounter = 1;

function sortIdeas() {
  $("#sortButton").click(function(event){
    event.preventDefault();
    var ideas = $('.idea')
    var sortedIdeas = sortByRating(ideas);
    console.log(sortedIdeas);
    $('.ideas').children().remove();
    if (clickCounter % 2) {
      $('.ideas').prepend(ideas.reverse())
    } else {
      $('.ideas').prepend(ideas)
    }
    clickCounter += 1
  });
}

function sortByRating(ideas){
  return ideas.sort(function(ideaA, ideaB){
    return getQuality(ideaA) - getQuality(ideaB)
  })
}

function getQuality(idea){
  return qualities.indexOf($(idea).data('qual'))
}

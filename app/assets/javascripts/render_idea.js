function renderIdea(idea) {
  $(".ideas").append("<div class=idea id=idea" + idea.id + " data-id=" + idea.id +"></div>")
  $("#idea" + idea.id).append("<div class='ideaTitle'><h1>Title: " + idea.title + "</h1></div>");
  $("#idea" + idea.id).append("<div class='ideaBody'><h3>Body: " + idea.body + "</h3></div>");
  $("#idea" + idea.id).append("<div class='ideaQuality'><h5>Quality: " + idea.quality + "</h6></div>");
};

function renderIdea(idea) {
  $(".ideas").prepend("<div class='idea' id=idea"
                     + idea.id
                     + " data-id="
                     + idea.id
                     + " >"
                     + "<h5>Title: </h5>"
                     + "<h5 id='ideaTitle" + idea.id + "' >" + idea.title + "</h5><br>"
                     + "<h5>Body: </h5>"
                     + "<h5 id='ideaBody" + idea.id + "' >" + idea.body + "</h5><br>"
                     + "<p>Quality: "
                     + idea.quality
                     + "</p>"
                     + "<button id='deleteIdeaButton' name='button-fetch' class='btn red btn-delete'>Delete</button>"
                     + "<button id='updateIdeaButton' name='button-fetch' class='btn green btn-update'>Update</button></div>"
                    )
};

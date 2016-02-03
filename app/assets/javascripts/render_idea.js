function renderIdea(idea) {
  $(".ideas").prepend("<div class='idea' id=idea"
                     + idea.id
                     + " data-id="
                     + idea.id
                     + " data-qual="
                     + idea.quality
                     + " >"
                     + "<h5>Title: </h5>"
                     + "<h5 class='title' id='ideaTitle" + idea.id + "' >" + idea.title + "</h5><br>"
                     + "<h5>Body: </h5>"
                     + "<h5 class='body' id='ideaBody" + idea.id + "' >" + idea.body + "</h5><br>"
                     + "<p class='quality'>Quality: "
                     + idea.quality
                     + "</p><br>"
                     + "<button name='button-fetch' class='deleteIdeaButton btn red btn-delete'>Delete</button>"
                     + "<button name='button-fetch' class='updateIdeaButton btn green btn-update'>Edit</button>"
                     + "<button name='button-fetch' class='upvoteIdeaButton btn btn-vote'><img src='/assets/thumb_up.png'></button>"
                     + "<button name='button-fetch' class='downvoteIdeaButton btn btn-vote'><img src='/assets/thumb_down.png'></button></div>"
                    )
};

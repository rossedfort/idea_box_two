function renderIdea(idea) {
  $(".ideas").prepend("<div class='idea' id=idea"
                     + idea.id
                     + " data-id="
                     + idea.id
                     + " >"
                     + "<h5>Title: "
                     + idea.title
                     + "</h5>"
                     + "<h5>Body: "
                     + idea.body
                     + "</h5>"
                     + "<p>Quality: "
                     + idea.quality
                     + "</p>"
                     + "<button id='deleteIdeaButton' name='button-fetch' class='btn red btn-delete'>Delete</button></div>"
                    )
};

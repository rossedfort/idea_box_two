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
                     + "</p></div>"
                    )
};

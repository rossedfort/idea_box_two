require 'rails_helper'

RSpec.describe "user update", type: :feature, js: true do
  create_ideas
  feature "can update ideas" do
    it "clicks edit button" do
      visit root_path
      within("#idea1") do
        click_button("Edit")
        updateTitleField = find('#ideaTitle1')
        updateTitleField.set(" is the best title")
        updateBodyField = find('#ideaBody1')
        updateBodyField.set(" is the best body")
        click_button("Save")
        expect(page).to have_content("Title1 is the best title")
        expect(page).to have_content("Body1 is the best body")
      end
    end
  end
end

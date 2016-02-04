require 'rails_helper'

RSpec.describe "user read", type: :feature, js: true do
  create_ideas
  feature "user can see ideas" do
    it "on the root page" do
      visit root_path
      within("#idea1") do
        expect(page).to have_content("Title1")
        expect(page).to have_content("Body1")
      end
      within("#idea2") do
        expect(page).to have_content("Title2")
        expect(page).to have_content("Body2")
      end
      within("#idea3") do
        expect(page).to have_content("Title3")
        expect(page).to have_content("Body3")
      end
    end
  end
end

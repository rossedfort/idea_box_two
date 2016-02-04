require 'rails_helper'

RSpec.describe "user destroy", type: :feature, js: true do
  feature "can delete idea" do
    it "by clicking delete button" do
      visit root_path
      visit root_path
      fill_in "ideaTitle", with: 'Idea2'
      fill_in "ideaBody", with: 'Wow, another great idea'
      click_button('Save')
      within("#idea1") do
        click_button("Delete")
      end
      expect(current_path).to eq(root_path)
      within(".ideas") do
        expect(page).to_not have_content("Idea2")
        expect(page).to_not have_content("Wow, such a great idea")
      end
    end
  end
end

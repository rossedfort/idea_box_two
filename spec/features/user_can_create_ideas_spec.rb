require 'rails_helper'

RSpec.describe "user create", type: :feature, js: true do
  feature "can create an idea" do
    it "saves idea when title and body are input correctly" do
      visit root_path
      fill_in "ideaTitle", with: 'Idea'
      fill_in "ideaBody", with: 'Wow, such a great idea'
      click_button('Save')

      expect(current_path).to eq(root_path)
      expect(page).to have_content('Idea')
      expect(page).to have_content('Wow, such a great idea')
    end
  end
end

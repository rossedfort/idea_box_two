require 'rails_helper'

RSpec.describe "user", type: :feature do
  feature "can view home page" do
    it "can see stuff" do
      visit root_path
      expect(current_path).to eq(root_path)
    end
  end
end

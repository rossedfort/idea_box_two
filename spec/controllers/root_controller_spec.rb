require 'rails_helper'

RSpec.describe RootController do
  describe 'GET #index' do
    let!(:idea) { FactoryGirl.create(:idea) }
    it "gets success" do
      get :index
      expect(response).to render_template("index")
    end
  end
end

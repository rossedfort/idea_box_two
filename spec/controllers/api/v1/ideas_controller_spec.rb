require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :api do
  describe 'GET #index' do
    let!(:idea) { FactoryGirl.create(:idea) }
    before do
      get "/api/v1/ideas", format: :json
    end
    it "gets success" do
      response = JSON.parse(last_response.body).first
      expect(last_response.status).to eq(200)
      expect(response["title"]).to eq("Idea")
      expect(response["body"]).to eq("So good")
    end
  end
end

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

  describe 'GET #create' do
    before do
      post "/api/v1/ideas", format: :json, idea: {
          title: "new idea",
          body: "better than the last one"
        }
    end
    it "gets success" do
      response = JSON.parse(last_response.body)
      expect(last_response.status).to eq(201)
      expect(response["title"]).to eq("new idea")
      expect(response["body"]).to eq("better than the last one")
    end
  end

  describe 'GET #update' do
    let!(:idea) { FactoryGirl.create(:idea) }
    before do
      put "/api/v1/ideas/#{idea.id}", format: :json, idea: {
          title: "new idea",
          body: "better than the last one"
        }
    end
    it "gets success" do
      get "/api/v1/ideas", format: :json
      response = JSON.parse(last_response.body).first
      expect(response["title"]).to eq("new idea")
      expect(response["body"]).to eq("better than the last one")
    end
  end

  describe 'GET #destroy' do
    let!(:idea) { FactoryGirl.create(:idea) }
    before do
      delete "/api/v1/ideas/#{idea.id}", format: :json
    end
    it "gets success" do
      get "/api/v1/ideas", format: :json
      expect(last_response.status).to eq(200)
      expect(last_response.body).to eq("[]")
    end
  end
end

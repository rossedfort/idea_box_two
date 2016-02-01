class Api::V1::IdeasController < ApplicationController
  respond_to :json, :xml

  def index
    respond_with Idea.all
  end

  def create
    Idea.create(idea_params)
    redirect_to :back
  end

  private

  def idea_params
    params.permit(:title, :body)
  end
end

class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params)
  end

  private

  def item_params
    params.require(:item).permit(:title, :body)
  end
end

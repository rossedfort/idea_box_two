class Api::V1::IdeasController < ApplicationController
  respond_to :json, :xml

  def index
    respond_with Idea.all
  end

  def create
    @idea = Idea.new(idea_params)

    if @idea.save
      respond_with :api, :v1, @idea
    else
      respond_with @idea.errors.full_messages.join(", ")
    end
  end

  def update
    respond_with Idea.update(params[:id], idea_params)
  end

  def destroy
    respond_with Idea.delete(params[:id])
  end

  private

  def idea_params
    params[:idea][:quality] = params[:idea][:quality].to_i
    params.require(:idea).permit(:title, :body, :quality)
  end
end

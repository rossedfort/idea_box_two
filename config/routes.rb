Rails.application.routes.draw do
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :update, :destroy], defaults: {format: :json}
    end
  end
end

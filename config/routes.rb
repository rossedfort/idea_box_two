Rails.application.routes.draw do
  root "root#root"
  
  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :update, :destroy], defaults: {format: :json}
    end
  end
end

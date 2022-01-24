Rails.application.routes.draw do
  
  resources :activities, only:[:index, :create]
  resources :foods, only:[:index, :create]
  resources :lodgings, only:[:index, :create]
  # resources :vacation_users, only:[:create]
  resources :vacations, only:[:index]
  resources :users, only:[:index, :create]

  # for user authentication
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

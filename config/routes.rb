Rails.application.routes.draw do
  
  resources :activities, only:[:index, :create]
  resources :foods, only:[:index, :create]
  resources :lodgings, only:[:index, :create]
  resources :vacation_users, only:[:create]
  resources :vacations, only:[:index, :create]
  resources :users, only:[:index, :create, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

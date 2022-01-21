Rails.application.routes.draw do
  
  resources :activities, only:[:index]
  resources :foods, only:[:index]
  resources :lodgings, only:[:index]
  resources :vacation_users, only:[:create]
  resources :vacations, only:[:index]
  resources :users, only:[:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  
  resources :activities, only:[:index, :create, :update, :destroy] #no show
  resources :foods, only:[:index, :create, :update, :destroy] #no show
  resources :lodgings, only:[:index, :create, :update, :destroy] #no show
  resources :vacation_users, only:[:create, :destroy] 
  resources :vacations #all routes
  resources :users #all routes

  # for user authentication
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # for incrementing likes
  patch "/activities/:id/like" , to: "activities#increment_likes"
  patch "/activities/:id/dislike" , to: "activities#decrement_likes"
  patch "/foods/:id/like" , to: "foods#increment_likes"
  patch "/foods/:id/dislike" , to: "foods#decrement_likes"
  patch "/lodgings/:id/like" , to: "lodgings#increment_likes"
  patch "/lodgings/:id/dislike" , to: "lodgings#decrement_likes"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

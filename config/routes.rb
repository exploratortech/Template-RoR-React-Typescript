Rails.application.routes.draw do
  root to: 'home#landing'
  get '/sweet_home', to: 'home#sweet_home', as: 'sweet_home_path'

  resources :arms
  resources :legs
  resources :treadmills
  resources :stair_masters
end

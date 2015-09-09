Rails.application.routes.draw do
  resource :session
  resources :users
  root 'sessions#new'
end

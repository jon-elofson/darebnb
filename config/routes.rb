Rails.application.routes.draw do
  resource :session
  resources :users
  root 'session#new'
end

Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  get '/home', to: 'static_pages#home'
  resources :places
  root 'static_pages#splash'
end

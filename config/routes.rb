Rails.application.routes.draw do
  devise_for :users
  resources :places
  root 'static_pages#splash'
end

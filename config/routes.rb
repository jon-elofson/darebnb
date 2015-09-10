Rails.application.routes.draw do
  devise_for :user, :path => '', :path_names => { :sign_in => "", :sign_out => "", :sign_up => "" }
  resources :users
  root 'sessions#new'

end

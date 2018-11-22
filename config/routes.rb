Rails.application.routes.draw do
  get 'email/index', to:"email#index"
  resources :email
  devise_for :users
  root to: "home#index"
  resources :tasks, except: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

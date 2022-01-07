# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  devise_scope :user do
    # get 'sign_in', to: 'devise/sessions#new', as: :new_user_session
    get 'sign_out', to: 'devise/sessions#destroy', as: :destroy_user_session
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'home/index'
    get 'users/current'
    resources :products, only: %i[index]
  end
  root to: 'home#index'

  get '/check.txt', to: proc { [200, {}, ['it_works']] }
  get '*path', to: 'home#index', constraints: ->(req) { !req.url['active_storage'] }
end

Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resource :dashboard, only: :show

  resources :clients, only: [:index] #Not nested because not linked to a client show (the client will be input in the form)

  resources :products, only: [:index, :show] do
    resources :product_lots, only: [:create] # has many between orders & product_lots ? Not necessary
  end

  resources :orders, only: [:index, :new, :create] do # No show because collapse
    member do
      patch :prepare
      patch :deliver
      patch :pay
    end
  end
  # resources :order_lines, only: [:create] #created by Anne for new order form
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

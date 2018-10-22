Rails.application.routes.draw do
  resources :api do
    resources :cards
  end
end

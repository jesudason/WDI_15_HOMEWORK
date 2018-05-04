# Hogwarts::Application.routes.draw do
Rails.application.routes.draw do
  get '/students/new', to: "students#new"
  resources :houses, only: [:index, :show]
  resources :students, only: [:index, :show]

  get '/', to: "houses#index"

end

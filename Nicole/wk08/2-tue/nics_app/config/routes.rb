Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	# resources :tasks

	get '/tasks/new', to: 'tasks#new'
	post '/tasks', to: 'tasks#create'

	get '/tasks/:id', to: 'tasks#show'
	delete '/tasks/:id', to: 'tasks#destroy'
	get '/tasks/:id/edit', to: 'tasks#edit'
	put '/tasks/:id', to: 'tasks#update'
	get '/tasks', to: 'tasks#index'


 	get '/login', to: 'session#new'
	post '/session', to: 'session#create'
	delete '/session', to: 'session#destroy'

	get '/', to: 'pages#home'

end

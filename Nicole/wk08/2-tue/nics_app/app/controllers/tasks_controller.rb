class TasksController < ApplicationController

	def new

	end

	def create
		task = Task.new
		task.name = params[:name]
		task.description = params[:description]
		task.user_id = User.first.id #fix later
		task.save
		@tasks = Task.all
		redirect_to "/"
	end

	def destroy
		Task.delete( params[:id] )
		redirect_to '/'
	end

	def edit
		@task = Task.find(params[:id])
	end

	def update
		task = Task.find(params[:id])
		task.name = params[:name]
		task.description = params[:description]
		task.save
		redirect_to "/"	
	end

	def home
		@tasks = Task.all
	end
end
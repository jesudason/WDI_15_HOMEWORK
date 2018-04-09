require 'sinatra'
require 'sinatra/reloader'

require 'httparty'
require 'pry'


get '/' do
	erb :index
end

get '/movie' do
	
	# redirect to ('/') if params[].empty?

	
	@title = params[:title]
	url = "http://omdbapi.com/?apikey=2f6435d9&t=#{@title}&plot=full"


# binding.pry
	result = HTTParty.get(url)
	@released = result.parsed_response['Released']
	@director = result.parsed_response['Director']
	@plot = result.parsed_response['Plot']
	erb :movie
end




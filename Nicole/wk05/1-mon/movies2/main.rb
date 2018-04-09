     
require 'sinatra'
require 'sinatra/reloader'

require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/movie_list' do

	@search = params[:search]
	url = "http://omdbapi.com/?apikey=2f6435d9&s=#{@search}"
	result = HTTParty.get(url)

	@movies = result.parsed_response['Search']
	

	# results.each	{|movie| puts movie['Title']}
	erb :movie_list
	# binding.pry

end

get '/movie' do
	url = "http://omdbapi.com/?apikey=2f6435d9@t=jaws"
	@result = HTTParty.get(url)
binding.pry
	erb :movie
	# @director = result.parsed_response['Director']
	# @plot = result.parsed_response['Plot']
end

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

get '/movie/:title' do

	# @title = params[:title]
	url = "http://omdbapi.com/?apikey=2f6435d9&t=#{params[:title]}&plot=full"
	result = HTTParty.get(url)
	@movie = result.parsed_response['Title']
	@director = result.parsed_response['Director']
	@poster = result.parsed_response['Poster']
	@plot = result.parsed_response['Plot']

# binding.pry
	erb :movie
	# @director = result.parsed_response['Director']
	# @plot = result.parsed_response['Plot']
end


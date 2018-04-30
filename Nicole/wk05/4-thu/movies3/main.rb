require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'
# require 'pg'

# def run_query(sql)
# 	conn = PG.connect(dbname: 'movies')
# 	result = conn.exec(sql)
# 	conn.close
# 	result 
# end

get '/' do
  erb :index
end

get '/movie_list' do

	@search = params[:search]
	
	url = "http://omdbapi.com/?apikey=2f6435d9&s=#{@search}"
	result = HTTParty.get(url)

	@movies = result.parsed_response['Search']
	

# binding.pry

		erb :movie_list

end

get '/movie/:title' do

	if @movie.omdb_id
		Movie.find(omdb_id: @movie.omdb_id)
	else

	url = "http://omdbapi.com/?apikey=2f6435d9&t=#{params[:title]}"
	result = HTTParty.get(url)

	@movie = Movie.new
	@movie.title = result.parsed_response['Title']
	@movie.director = result.parsed_response['Director']
	@movie.poster = result.parsed_response['Poster']
	@movie.plot = result.parsed_response['Plot']
	@movie.website = result.parsed_response['Website']
	@movie.omdb_id = result.parsed_response['imdbID']
	@movie.save
end


binding.pry
	erb :movie

end





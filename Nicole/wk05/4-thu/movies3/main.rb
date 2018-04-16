require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'

def run_query(sql)
	conn = PG.connect(dbname: 'movies')
	result = conn.exec(sql)
	conn.close
	result 
end

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

	# @title = params[:title]
	url = "http://omdbapi.com/?apikey=2f6435d9&t=#{params[:title]}"
	result = HTTParty.get(url)

	@movie = result.parsed_response['Title']
	@director = result.parsed_response['Director']
	@poster = result.parsed_response['Poster']
	@plot = result.parsed_response['Plot']
	@website = result.parsed_response['Website']
	@omdb_id = result.parsed_response['imdbID']

	# sql_check = IF EXISTS(select * FROM movies where omdb_id = '@omdb_id')
	

	sql = "INSERT INTO movies (title, director, poster, plot, website, omdb_id) values ('#{@movie}', '#{@director}', '#{@poster}', '#{@plot}', '#{@website}', '#{@omdb_id}') ;"
	run_query(sql)

# binding.pry
	erb :movie
	# @director = result.parsed_response['Director']
	# @plot = result.parsed_response['Plot']
end





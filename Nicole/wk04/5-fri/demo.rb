require 'httparty'
require 'pry'


url = "http://omdbapi.com/?apikey=2f6435d9&t=batman"

result = HTTParty.get(url)

puts result.parsed_response['Title']
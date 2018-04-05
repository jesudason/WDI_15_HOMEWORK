require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'


get '/' do
	# binding.pry
	@stock = StockQuote::Stock.quote(params[:stock]).latest_price.to_s
	erb :index	
end



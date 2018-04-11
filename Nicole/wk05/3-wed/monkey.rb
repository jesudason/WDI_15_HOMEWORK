require 'pry'
=begin
# Monkies!!

Create a `Monkey` class in `monkey.rb`, which has the following attributes:
* `name` - a string, which should be determined by some input
* `species` - a string, which should be determined by some input
* `foods_eaten` - an array, which should be initialized as an empty array

And the following methods:
* `eat(food)` - adds a food (a string) to the list of foods eaten
* `introduce` - introduces self, with name, species, and what it's eaten

=end

class Monkey
# binding.pry	
	def initialize(name, species)
		@name = name
		@species = species
		@foods_eaten = []
	end

	def eat(food)
		@foods_eaten = @foods_eaten.push food
	end

	def introduce
		if @foods_eaten.length > 1
			@introduce = puts "Hello! I am #{@name}, a #{@species} monkey. I had #{@foods_eaten[0...-1].join(', ')} and #{@foods_eaten.last} for brunch."
		else
			@introduce = puts "Hello! I am #{@name}, a #{@species} monkey. I had #{@foods_eaten[0]} for brunch."
		end
	end
end
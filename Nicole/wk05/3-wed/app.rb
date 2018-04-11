require 'pry'
=begin

Create another file app.rb to use test out the Monkey class  
you should be able to call all the following methods
```
adam = Monkey.new("Adam", "Spider Monkey")
adam.eat('fruit salad')
adam.eat('banana milkshake')
adam.introduce # "Hi my name is Adam. I am a Spider Monkey. I had fruit salad and banana milkshake for brunch"

=end

load 'monkey.rb'
puts "what is the monkey's name?"
name = gets.chomp

puts "what species is #{name}"
species = gets.chomp
monkey = Monkey.new(name, species)

puts "what did #{name} eat?"
food = gets.chomp
monkey.eat(food)

loop do
puts "any other food?"
more_food = gets.chomp
	if more_food == 'yes'
		puts "what else did #{name} eat?"
		food = gets.chomp
		monkey.eat(food)
	else 
		puts monkey.introduce
		break
	end
end

# adam = Monkey.new("Adam", "Spider Monkey")
# adam.eat('fruit salad')
# adam.eat('banana milkshake')
# adam.introduce

# binding.pry

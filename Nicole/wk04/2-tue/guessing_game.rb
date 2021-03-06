=begin

Activity:
You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

Specification:
The user should be asked to guess a number
If the user's guess is correct, the user should see a congratulatory message
If the user's guess is not correct, the user should be asked to guess the number again.
Extensions:
Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

=end

puts('welcome to the guessing game')

puts('select max number')
max_num = gets.chomp.to_i
secret = 0 + rand(max_num)

puts('guess the random number')
guess = gets.chomp.to_i

while guess != secret
	if guess < secret
		puts 'Wrong, guess higher'
	end
	if guess > secret
		puts 'Wrong, guess lower'
	end
	puts('guess again')
	guess = gets.chomp.to_i
end

puts('You Win!')


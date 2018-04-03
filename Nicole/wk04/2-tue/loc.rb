=begin

write a program loc.rb to count and puts the number of lines of code in a file

eg. say you have a file data.txt with the following contents

cat
dog
rabbit
when I run the program, it should prompt for a filename

$ ruby loc.rb
$ Enter filename: data.txt
$ 3 line(s)
hint
lookup gets method and the readlines method

=end

puts 'Enter filename: '
filename = gets.chomp
lines = File.readlines(filename)
line_count = lines.length
puts line_count

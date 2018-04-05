# Array and Hash access

### A. Given the following data structure:

```ruby
a = ["Anil", "Erik", "Jonathan"]
```

1. How would you return the string `"Erik"`?
a[1]

1. How would you add your name to the array?
a.push('Nicole')

### B. Given the following data structure:

```ruby
h = {
  0 => "Zero", 
  1 => "One", 
  :two => "Two", 
  "two" => 2}
```

1. How would you return the string `"One"`? h[1]
1. How would you return the string `"Two"`? h[:two]
1. How would you return the number `2`? h["two"] 
1. How would you add `{3 => "Three"}` to the hash? h[3] = "Three"
1. How would you add `{:four => 4}` to the hash? h[:four] = 4

### C. Given the following data structure:

```ruby
is = {true => "It's true!", false => "It's false"}
```

1. What is the return value of `is[2 + 2 == 4]`? `It's true!`
1. What is the return value of `is["Erik" == "Jonathan"]`? `It's false`
1. What is the return value of `is[9 > 10]`? `It's false`
1. What is the return value of `is[0]`? nil
1. What is the return value of `is["Erik"]`? nil 

### D. Given the following data structure:

```ruby
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
```

1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
users["Jonathan"][:twitter]
1. How would you add the number `7` to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push 7

1. How would you add yourself to the users hash?
users['Nicole'] = {twitter: 'NA'}

1. How would you return the array of Erik's favorite numbers?
users['Erik'][:favorite_numbers]

1. How would you return the smallest of Erik's favorite numbers?
users['Erik'][:favorite_numbers].min

1. How would you return an array of Anil's favorite numbers that are also even?

even_numbers = []
users['Anil'][:favorite_numbers].each { |num|
    even_numbers.push num if num.even?

}
print even_numbers

users['Anil'][:favorite_numbers].select do |num| 
  num.even? 
end

1. How would you return an array of the favorite numbers common to all users?
common_numbers = []

users["Erik"][:favorite_numbers] & users["Jonathan"][:favorite_numbers] & users["Anil"][:favorite_numbers]


1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
arr = [users["Erik"][:favorite_numbers]] + [["Jonathan"][:favorite_numbers]] + [users["Anil"][:favorite_numbers]]
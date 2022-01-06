# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Topping.delete_all
Topping.create(
  [
    { title: 'Кокосовое Молоко', price: 2 },
    { title: 'Безлактозное Молоко', price: 3 },
    { title: 'Миндальное Молоко', price: 4 }
  ]
)

Product.delete_all
Product.create(
  [
    { title: 'Флет-вайт', price: 5, description: 'coffee', category: 'coffee' },
    { title: 'Фильтр', price: 15, description: 'coffee, vvvv', category: 'coffee' },
    { title: 'Капучино', price: 10, description: 'coffee, milk, watter', category: 'coffee' }
  ]
).each do
  _1.image.attach(
    io: File.open(File.join(Rails.root, 'app/assets/images/defaultProduct.jpg')),
    filename: 'defaultProduct.jpg',
    content_type: 'application/jpg'
  )
  _1.toppings = Topping.all
  _1.save
end

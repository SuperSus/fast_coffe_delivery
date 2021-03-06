# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
admin = User.create(first_name: 'Admin', last_name: 'admin', role: 'admin')

Topping.destroy_all
Topping.create(
  [
    { title: 'Кокосовое Молоко', price: 10 },
    { title: 'Безлактозное Молоко', price: 15 },
    { title: 'Миндальное Молоко', price: 20 }
  ]
)

Product.destroy_all
Product.create(
  [
    { title: 'Флет-вайт', price: 50, description: 'coffee', category: 'coffee' },
    { title: 'Фильтр', price: 40, description: 'coffee, vvvv', category: 'coffee' },
    { title: 'Капучино', price: 35, description: 'coffee, milk, watter', category: 'coffee' },
    { title: 'Латте', price: 30, description: 'coffee, milk, watter', category: 'coffee' }
  ]
)
Product.all.preload(:toppings).each do
  _1.image.attach(
    io: File.open(File.join(Rails.root, 'app/assets/images/defaultProduct.jpg')),
    filename: 'defaultProduct.jpg',
    content_type: 'application/jpg'
  )
  _1.toppings = Topping.all
  _1.save
end

Address.destroy_all
address = Address.create(street: 'foo', flat: 1, house: 1, floor: 1)

Order.destroy_all
o = Order.new(
  address: address,
  customer: admin,
  items: [{ id: Product.last.id, toppings: Topping.all.map(&:as_json), quantity: 2 }]
)
o.comment = Comment.new(content: 'bar')
o.save

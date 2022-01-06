# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all
Product.create(
  [
    {
      id: 1, title: 'Флет-вайт', price: 5, description: 'coffee', category: 'coffee'
    },
    {
      id: 2, title: 'Фильтр', price: 15, description: 'coffee, vvvv', category: 'coffee'
    },
    {
      id: 3, title: 'Капучино', price: 10, description: 'coffee, milk, watter', category: 'coffee'
    }
  ]
).each do
  _1.image.attach(
    io: File.open(File.join(Rails.root, 'app/assets/images/defaultProduct.jpg')),
    filename: 'defaultProduct.jpg',
    content_type: 'application/jpg'
  )
end

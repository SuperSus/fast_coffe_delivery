# frozen_string_literal: true

class CreateToppings < ActiveRecord::Migration[6.1]
  def change
    create_table :toppings do |t|
      t.string :title
      t.decimal :price

      t.timestamps
    end

    create_table :products_toppings, id: false do |t|
      t.belongs_to :product
      t.belongs_to :topping
    end
  end
end

# frozen_string_literal: true

class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :category
      t.text :description
      t.string :title
      t.decimal :price

      t.timestamps
    end
  end
end

# frozen_string_literal: true

class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.integer :house
      t.integer :flat
      t.integer :floor
      t.string :details

      t.timestamps
    end
  end
end

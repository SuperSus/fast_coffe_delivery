# frozen_string_literal: true

class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.references :customer, null: false, foreign_key: { to_table: :users }
      t.references :address, null: false, foreign_key: true
      t.string :status
      t.decimal :total_cost
      t.jsonb :items

      t.timestamps
    end
  end
end

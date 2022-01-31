# frozen_string_literal: true

class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :order, null: false, foreign_key: { on_delete: :cascade }
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end

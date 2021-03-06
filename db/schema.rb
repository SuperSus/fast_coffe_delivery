# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_220_126_001_432) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'active_storage_attachments', force: :cascade do |t|
    t.string 'name', null: false
    t.string 'record_type', null: false
    t.bigint 'record_id', null: false
    t.bigint 'blob_id', null: false
    t.datetime 'created_at', null: false
    t.index ['blob_id'], name: 'index_active_storage_attachments_on_blob_id'
    t.index %w[record_type record_id name blob_id], name: 'index_active_storage_attachments_uniqueness',
                                                    unique: true
  end

  create_table 'active_storage_blobs', force: :cascade do |t|
    t.string 'key', null: false
    t.string 'filename', null: false
    t.string 'content_type'
    t.text 'metadata'
    t.string 'service_name', null: false
    t.bigint 'byte_size', null: false
    t.string 'checksum', null: false
    t.datetime 'created_at', null: false
    t.index ['key'], name: 'index_active_storage_blobs_on_key', unique: true
  end

  create_table 'active_storage_variant_records', force: :cascade do |t|
    t.bigint 'blob_id', null: false
    t.string 'variation_digest', null: false
    t.index %w[blob_id variation_digest], name: 'index_active_storage_variant_records_uniqueness', unique: true
  end

  create_table 'addresses', force: :cascade do |t|
    t.string 'street'
    t.integer 'house'
    t.integer 'flat'
    t.integer 'floor'
    t.string 'details'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'comments', force: :cascade do |t|
    t.bigint 'order_id', null: false
    t.string 'title'
    t.text 'content'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['order_id'], name: 'index_comments_on_order_id'
  end

  create_table 'orders', force: :cascade do |t|
    t.bigint 'customer_id', null: false
    t.bigint 'address_id', null: false
    t.string 'status'
    t.decimal 'total_cost'
    t.jsonb 'items'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['address_id'], name: 'index_orders_on_address_id'
    t.index ['customer_id'], name: 'index_orders_on_customer_id'
  end

  create_table 'products', force: :cascade do |t|
    t.string 'category'
    t.text 'description'
    t.string 'title'
    t.decimal 'price'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'products_toppings', id: false, force: :cascade do |t|
    t.bigint 'product_id'
    t.bigint 'topping_id'
    t.index ['product_id'], name: 'index_products_toppings_on_product_id'
    t.index ['topping_id'], name: 'index_products_toppings_on_topping_id'
  end

  create_table 'toppings', force: :cascade do |t|
    t.string 'title'
    t.decimal 'price'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'users', force: :cascade do |t|
    t.datetime 'remember_created_at'
    t.integer 'sign_in_count', default: 0, null: false
    t.datetime 'current_sign_in_at'
    t.datetime 'last_sign_in_at'
    t.string 'current_sign_in_ip'
    t.string 'last_sign_in_ip'
    t.string 'telegram_id'
    t.string 'first_name'
    t.string 'last_name'
    t.string 'username'
    t.string 'photo_url'
    t.string 'phone'
    t.string 'address'
    t.integer 'role', default: 0
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  add_foreign_key 'active_storage_attachments', 'active_storage_blobs', column: 'blob_id'
  add_foreign_key 'active_storage_variant_records', 'active_storage_blobs', column: 'blob_id'
  add_foreign_key 'comments', 'orders', on_delete: :cascade
  add_foreign_key 'orders', 'addresses'
  add_foreign_key 'orders', 'users', column: 'customer_id'
end

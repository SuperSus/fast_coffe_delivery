# frozen_string_literal: true

class ProductSerializer < BaseSerializer
  attributes :title, :price, :category, :description

  attribute :image do |object|
    rails_blob_path(object.image, disposition: 'attachment', only_path: true)
  end

  attribute :toppings do |object|
    # TODO: fix n+1
    object.toppings.select(:id, :title, :price).as_json
  end
end

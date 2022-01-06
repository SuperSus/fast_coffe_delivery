# frozen_string_literal: true

class ProductSerializer < BaseSerializer
  attributes :title, :price, :category, :description

  attribute :image do |object|
    rails_blob_path(object.image, disposition: 'attachment', only_path: true)
  end
end

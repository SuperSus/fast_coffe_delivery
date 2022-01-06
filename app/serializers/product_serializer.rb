# frozen_string_literal: true

class ProductSerializer
  include JSONAPI::Serializer
  include Rails.application.routes.url_helpers

  attributes :title, :price, :category, :description
end

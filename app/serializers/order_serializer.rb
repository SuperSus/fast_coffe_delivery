# frozen_string_literal: true

class OrderSerializer < BaseSerializer
  attributes :items, :total_cost, :comment

  attribute :address do |object|
    object.address.as_json
  end
end

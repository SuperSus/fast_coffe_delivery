# frozen_string_literal: true

module Types
  include Dry.Types
  Product = Types.Instance(Product)
  Topping = Types.Instance(Topping)

  module Orders
    class Item < Dry::Struct
      attribute :product, Types::Product
      attribute :toppings, Types::Array.of(Types::Topping)
      attribute :quantity, Types::Coercible::Integer

      def price
        @price ||= quantity * (product.price + toppings.map(&:price).sum)
      end
    end
  end
end

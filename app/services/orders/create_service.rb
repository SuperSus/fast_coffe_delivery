# frozen_string_literal: true

module Orders
  class CreateService
    prepend BasicService

    option :items
    option :customer
    option :address
    option :comment, optional: true

    attr_reader :order

    def call
      @order = Order.new(
        customer: @customer,
        address: @address,
        items: @items.as_json,
        total_cost: total_cost
      )
      @order.comment = Comment.new(content: @comment) if @comment
      fail!(@order.errors) unless order.save
    end

    private

    def total_cost
      @total_cost ||= casted_items.sum(&:price)
    end

    def casted_items
      @casted_items ||= begin
        products_ids = @items.map { _1[:id] }
        products_hash = Product
                        .where(id: products_ids)
                        .preload(:toppings)
                        .index_by(&:id)
        @items.map do |item|
          product = products_hash[item[:id].to_i]
          toppings = product.toppings.where(id: item[:toppings].map { |t| t[:id] }).to_a
          Types::Orders::Item.new(
            product: product,
            toppings: toppings,
            quantity: item[:quantity]
          )
        end
      end
    end
  end
end

# frozen_string_literal: true

module Api
  class OrdersController < BaseController
    before_action :find_or_create_address, only: :create

    # POST create order
    #
    # @example body
    # {
    #   items: [
    #     {
    #       id: 1,
    #       title: 'latte',
    #       toppings: [{ id: 1 }]
    #       quantity: 2
    #     }
    #   ],
    #   address: { street: 'foo', home: 1, flat: 1, floor: 1, details: '' }
    #   comment: 'bar'
    # }
    def create
      result = Orders::CreateService.call(
        customer: current_user,
        items: order_params[:items],
        address: @address,
        comment: params[:comment]
      )
      binding.pry

      if result.success?
        render json: OrderSerializer.new(result.order).serializable_hash
      else
        error_response(result.order, :unprocessable_entity)
      end
    end

    private

    def find_or_create_address
      @address = Address.find_or_create_by(address_params)
    end

    def order_params
      params.require(:order).permit(items: [[:id, :quantity, { toppings: [:id] }]])
    end

    def address_params
      params.require(:address).permit(:street, :home, :flat, :floor, :details)
    end
  end
end

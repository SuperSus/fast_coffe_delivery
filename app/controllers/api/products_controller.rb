# frozen_string_literal: true

module Api
  class ProductsController < BaseController
    def index
      render json: ProductSerializer
                     .new(Product.where(category: params[:category]))
                     .serializable_hash
    end
  end
end

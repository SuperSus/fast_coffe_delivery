# frozen_string_literal: true

module Api
  class UsersController < BaseController
    def current
      if user_signed_in?
        render json: UserSerializer.new(current_user).serializable_hash
      else
        render json: {}
      end
    end
  end
end

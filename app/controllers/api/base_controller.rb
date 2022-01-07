# frozen_string_literal: true

module Api
  class BaseController < ActionController::API
    before_action :auto_sign_in if Rails.env.development?

    rescue_from(StandardError) { |e| handle_exception(e) }

    private

    def handle_exception(e)
      case e
      when ActiveRecord::RecordNotFound
        error_response(I18n.t(:not_found, scope: 'api.errors'), :not_found)
      when ActiveRecord::RecordNotUnique
        error_response(I18n.t(:not_unique, scope: 'api.errors'), :unprocessable_entity)
      when ActionController::ParameterMissing, KeyError
        error_response(I18n.t(:missing_parameters, scope: 'api.errors'), :unprocessable_entity)
      else
        raise
      end
    end

    def error_response(error_messages, status)
      errors = case error_messages
               when ActiveRecord::Base
                 ErrorSerializer.from_model(error_messages)
               else
                 ErrorSerializer.from_messages(error_messages)
               end

      render json: errors, status: status
    end

    def auto_sign_in
      sign_in(:user, User.first) unless user_signed_in?
    end
  end
end

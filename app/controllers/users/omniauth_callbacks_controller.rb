# frozen_string_literal: true

module Users
  class OmniauthCallbacksController < Devise::OmniauthCallbacksController
    skip_before_action :verify_authenticity_token, only: %i[telegram]

    def telegram
      auth_handling
    end

    def failure
      redirect_to root_path
    end

    private

    def auth_handling
      auth_data = request.env['omniauth.auth']
      return redirect_to root_path if auth_data.empty?

      @user = User.from_omniauth(auth_data)
      if @user.persisted?
        binding.pry
        sign_in_and_redirect @user, event: :authentication
      else
        session["devise.#{auth_data['provider']}_data"] = auth_data.except(:extra)
        redirect_to root_path
      end
    end
  end
end

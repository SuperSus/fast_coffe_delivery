# frozen_string_literal: true

module Api
  # Default Home Controller
  class HomeController < ApplicationController
    def index
      render json: { greeting: 'hello' }
    end
  end
end

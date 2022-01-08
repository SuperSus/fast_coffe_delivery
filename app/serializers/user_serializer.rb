# frozen_string_literal: true

class UserSerializer < BaseSerializer
  attributes :address, :first_name, :last_name, :username, :phone, :role, :telegram_id

  attribute :user_signed_in do
    true
  end
end

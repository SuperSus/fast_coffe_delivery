# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :database_authenticatable, :registerable, :recoverable, :rememberable,
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :rememberable, :trackable, :omniauthable, omniauth_providers: %i[telegram]

  enum role: %i[customer admin]

  def self.from_omniauth(auth)
    where("#{auth.provider}_id" => auth.uid).first_or_create! do |user|
      user.send("#{auth.provider}_id=", auth.uid)
      user.first_name = auth.info.first_name
      user.last_name = auth.info.last_name
      user.username = auth.info.username
      user.photo_url = auth.info.image
    end
  end
end

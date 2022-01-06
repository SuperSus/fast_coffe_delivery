# frozen_string_literal: true

class Product < ApplicationRecord
  has_one_attached :image
  has_and_belongs_to_many :toppings, strict_loading: true

  scope :with_image, -> { preload(image_attachment: :blob) }
  scope :with_toppings, -> { preload(:toppings) }
end

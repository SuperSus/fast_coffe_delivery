# frozen_string_literal: true

class Product < ApplicationRecord
  has_one_attached :image

  scope :with_image, -> { includes(image_attachment: :blob) }
end

# frozen_string_literal: true

class Order < ApplicationRecord
  include AASM

  has_one :comment, dependent: :destroy

  belongs_to :customer, class_name: 'User', foreign_key: 'customer_id'
  belongs_to :address

  aasm(column: 'status') do
    state :new_order
    state :accepted
    state :preparing
    state :in_delivery
    state :completed

    event :accept do
      transitions from: :new_order, to: :accepted
    end

    event :prepare do
      transitions from: :accepted, to: :preparing
    end

    event :deliver do
      transitions from: :preparing, to: :in_delivery
    end

    event :complete do
      transitions from: :preparing, to: :in_delivery
    end
  end
end

class Food < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :url, presence: true
  validates :estimated_cost, presence: true
  validates :likes, numericality: { greater_than_or_equal_to: 0 }

  belongs_to :vacation
end

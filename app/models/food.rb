class Food < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :url, presence: true
  validates :estimated_cost, presence: true

  belongs_to :vacation
end

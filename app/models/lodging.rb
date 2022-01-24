class Lodging < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :url, presence: true
  validates :check_in, presence: true
  validates :check_out, presence: true
  validates :estimated_cost, presence: true

  belongs_to :vacation
end

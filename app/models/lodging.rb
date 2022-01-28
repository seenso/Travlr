class Lodging < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :url, presence: true
  validates :check_in, presence: true
  validates :check_out, presence: true
  validates :estimated_cost, presence: true
  validates :likes, numericality: { greater_than_or_equal_to: 0 }

  belongs_to :vacation
  default_scope { order(vacation_id: :desc, likes: :desc, name: :desc) }
end

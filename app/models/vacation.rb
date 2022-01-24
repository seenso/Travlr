class Vacation < ApplicationRecord
    validates :title, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :location, presence: true
    validates :number_of_food, presence: true
    validates :number_of_activities, presence: true
    validates :estimated_budget, presence: true

    has_many :lodgings
    has_many :foods
    has_many :activities
    has_many :vacation_users
    has_many :users, through: :vacation_users
end

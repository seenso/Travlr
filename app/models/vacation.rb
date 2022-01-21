class Vacation < ApplicationRecord
    has_many :lodgings
    has_many :foods
    has_many :activities
    has_many :vacation_users
    has_many :users, through: :vacation_users
end

class User < ApplicationRecord
    validates :username, presence: true
    validates :email, presence: true

    has_many :vacation_users
    has_many :vacations, through: :vacation_users
end

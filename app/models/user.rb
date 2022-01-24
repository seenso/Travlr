class User < ApplicationRecord
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true

    has_many :vacation_users
    has_many :vacations, through: :vacation_users
end

class User < ApplicationRecord
    has_many :vacation_users
    has_many :vacations, through: :vacation_users
end

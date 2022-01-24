class User < ApplicationRecord
    has_many :vacation_users
    has_many :vacations, through: :vacation_users

    #this enables password encryption with bcrypt - http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
end

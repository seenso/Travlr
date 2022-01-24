class User < ApplicationRecord
    validates :username, presence: true
<<<<<<< HEAD
    validates :email, presence: true
=======
    validates :username, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true
>>>>>>> aeee07af7b37716c850c4e0f8575b2dbc226e49c

    has_many :vacation_users
    has_many :vacations, through: :vacation_users

    #this enables password encryption with bcrypt - http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
end

class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
<<<<<<< HEAD
=======
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
>>>>>>> aeee07af7b37716c850c4e0f8575b2dbc226e49c

    def index
        render json: User.all
    end

    #POST /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # GET /me
    # handles the auto-login and allows user to stay logged in when page refreshes
    def show
        render json: @current_user
    end

    private

    def user_params
        # The has_secure_password (Links to an external site.) method also provides two new instance methods on your User model: password and password_confirmation. These methods don't correspond to database columns! Instead, to make these methods work, your users table must have a password_digest column.
        params.permit(:username, :email, :password, :password_confirmation, :image_url, :bio)
    end

    def record_invalid(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
<<<<<<< HEAD
=======

    def record_not_found
        render json: {error: "User not found"}, status: :not_found 
    end
>>>>>>> aeee07af7b37716c850c4e0f8575b2dbc226e49c
end

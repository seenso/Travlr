class UsersController < ApplicationController

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
        params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end

end

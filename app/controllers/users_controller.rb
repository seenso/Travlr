class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    private
        def user_params
            params.permit(:username, :email)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

        def record_not_found
            render json: {error: "User not found"}, status: :not_found 
        end

end

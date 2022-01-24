class FoodsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: Food.all
    end

    def create
        food = Food.create!(food_params)
        render json: food, status: :created
    end

    private
        def food_params
            params.permit(:name, :address, :url, :hours, :desc, :estimated_cost, :vacation_id)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
end

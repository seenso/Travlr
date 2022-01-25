class FoodsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        render json: Food.all
    end

    def create
        food = Food.create!(food_params)
        render json: food, status: :created
    end

    def update
        food = find_food
        food.update!(food_params)
        render json: food, status: :ok
    end
    
    def increment_likes
        food = find_food
        food.update!(likes: food.likes + 1)
        render json: food
    end

    def decrement_likes
        food = find_food
        food.update!(likes: food.likes - 1)
        render json: food
    end

    def destroy
        food = find_food
        food.destroy!
        head :no_content
    end

    private
        def food_params
            params.permit(:name, :address, :url, :hours, :desc, :estimated_cost, :vacation_id)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
        
        def find_food
            Food.find(params[:id])
        end

        def render_not_found
            render json: { error: "Food not found" }, status: :not_found
        end
end
class ActivitiesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        render json: Activity.all
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    def update
        activity = find_activity
        activity.update!(activity_params)
        render json: activity, status: :ok
    end

    def increment_likes
        activity = find_activity
        activity.update!(likes: activity.likes + 1)
        render json: activity
    end

    
    def decrement_likes
        activity = find_activity
        activity.update!(likes: activity.likes - 1)
        render json: activity
    end

    def destroy
        activity = find_activity
        activity.destroy!
        head :no_content
    end

    private

        def activity_params
            params.permit(:name, :address, :url, :hours, :desc, :estimated_cost, :likes, :vacation_id)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

        def find_activity
            Activity.find(params[:id])
        end

        def render_not_found
            render json: { error: "Activity not found" }, status: :not_found
        end

end
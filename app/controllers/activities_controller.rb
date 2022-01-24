class ActivitiesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: Activity.all
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    private
        def activity_params
            params.permit(:name, :address, :url, :hours, :desc, :estimated_cost, :vacation_id)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
end

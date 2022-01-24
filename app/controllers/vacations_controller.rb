class VacationsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: Vacation.all
    end

    def create
        vacation = Vacation.create!(vacation_params)
        render json: vacation, status: :created
    end

    private
        def vacation_params
            params.permit(:title, :start_date, :end_date, :location, :number_of_food, :number_of_activities, :estimated_budget)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
end

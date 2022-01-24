class VacationsController < ApplicationController
<<<<<<< HEAD
=======
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

>>>>>>> aeee07af7b37716c850c4e0f8575b2dbc226e49c
    def index
        render json: User.all
    end
<<<<<<< HEAD
=======

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
>>>>>>> aeee07af7b37716c850c4e0f8575b2dbc226e49c
end

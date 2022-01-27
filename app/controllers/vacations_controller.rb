class VacationsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        render json: Vacation.all
    end

    def create
        vacation = Vacation.create!(vacation_params)
        render json: vacation, status: :created
    end

    def show
        vacation = find_vacation
        render json: vacation, status: :ok
    end
    
    def update
        vacation = find_vacation
        vacation.update!(vacation_params)
        render json: vacation
    end

    def destroy
        vacation = find_vacation
        vacation.destroy!
        head :no_content
    end

    # GET /vacations/last
    # Get most recently created vacation
    def last
        last = Vacation.all.length
        render json: last
    end

    private
        def vacation_params
            params.permit(:title, :start_date, :end_date, :location, :number_of_food, :number_of_activities, :estimated_budget)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

        def find_vacation
            Vacation.find(params[:id])
        end

        def render_not_found
            render json: { error: "Food not found" }, status: :not_found
        end
end

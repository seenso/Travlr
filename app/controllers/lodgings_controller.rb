class LodgingsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        render json: Lodging.all
    end

    def create
        lodging = Lodging.create!(lodging_params)
        render json: lodging, status: :created
    end

    def update
        lodging = find_lodging
        lodging.update!(lodging_params)
        render json: lodging, status: :ok
    end

    private
        def lodging_params
            params.permit(:name, :address, :url, :check_in, :check_out, :estimated_cost, :vacation_id)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

        def find_lodging
            Lodging.find(params[:id])
        end

        def render_not_found
            render json: { error: "Lodging not found" }, status: :not_found
        end
end


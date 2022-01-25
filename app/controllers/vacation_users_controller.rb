class VacationUsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        vacationUser = VacationUser.create!(vacationUser_params)
        render json: vacationUser, status: :created
    end

    def destroy
        vacationUser = find_vacationUser
        vacationUser.destroy!
        head :no_content
    end

    private
        def vacationUser_params
            params.permit(:user_id, :vacation_id)
        end

        def record_invalid(invalid)
            render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

        def find_vacationUser
            VacationUser.find(params[:id])
        end
end
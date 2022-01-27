class VacationUsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: VacationUser.all
    end

    # GET /vacation_users/vacation/:id
    def show
        #vacation should render all vacationsUsers with params[:id] in vacation_id
        vacation = VacationUser.find_by(vacation_id: params[:id])
        render json: vacation
    end

    def create
        vacationUser = VacationUser.create!(vacationUser_params)
        render json: vacationUser, status: :created
    end

    def destroy
        vacationUser = VacationUser.find_by(user_id:@current_user.id, vacation_id:params[:id])
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

end
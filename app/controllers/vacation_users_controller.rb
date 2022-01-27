class VacationUsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: VacationUser.all
    end

    # to show all users/participants in a vacation by looking for a vacation's :id
    # GET /vacation_users/vacation/:id
    def showVacationsUsers
        vacationUsers = VacationUser.filter( |vacayUserObj| vacayUserObj.vacation.id == params[:id])
        render json: vacation, serializer: VacationUserSerializer
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
class VacationsController < ApplicationController

    def index
        render json: Vacation.all
    end

end

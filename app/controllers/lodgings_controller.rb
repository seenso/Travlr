class LodgingsController < ApplicationController

    def index
        render json: Lodging.all
    end

end

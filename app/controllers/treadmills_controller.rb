class TreadmillsController < ApplicationController
    def index
        @treadmills = Treadmill.all
    end

    def new 
        @treadmill = Treadmill.new
    end

    def create
        @treadmill = Treadmill.new(treadmill_params)

        if @treadmill.save
            redirect_to treadmills_path
        else 
            render(:new)
        end
    end

    def edit
        @treadmill = Treadmill.find(params[:id])
    end

    def update
        @treadmill = Treadmill.find(params[:id])

        if @treadmill.update(treadmill_params)
            redirect_to(treadmills_path)
        else 
            @error_messages = @treadmill.errors.full_messages
            render(:edit)
        end
    end

    def destroy
        @treadmill = Treadmill.find(params[:id])
        @treadmill.destroy
        redirect_to(treadmills_path)
    end

    private

    def treadmill_params
        params.require(:treadmill).permit(:distance, :time, :avg_pace)
    end
end

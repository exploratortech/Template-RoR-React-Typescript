class LegsController < ApplicationController
    def index
        @legs = Leg.all
    end

    def new 
        @leg = Leg.new
    end

    def create
        @leg = Leg.new(leg_params)

        if @leg.save
            redirect_to legs_path
        else 
            render(:new)
        end
    end

    def edit
        @leg = Leg.find(params[:id])
    end

    def update
        @leg = Leg.find(params[:id])

        if @leg.update(leg_params)
            redirect_to(legs_path)
        else 
            @error_messages = @leg.errors.full_messages
            render(:edit)
        end
    end

    def destroy
        @leg = Leg.find(params[:id])
        @leg.destroy
        redirect_to(legs_path)
    end

    private

    def leg_params
        params.require(:leg).permit(:seated_leg_curl, :leg_extension, :seated_leg_press, :hip_abductor_out, :hip_abductor_in, :hip_thrusts, :bulgarian_split_squats)
    end
end

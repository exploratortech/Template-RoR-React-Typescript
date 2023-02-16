class ArmsController < ApplicationController
    def index
        @arms = Arm.all.order(id: :desc)

        @arm = Arm.new
    end

    def new 
        @arm = Arm.new
    end

    def create
        @arm = Arm.new(arm_params)

        if @arm.save
            redirect_to arms_path
        else 
            render(:new)
        end
    end

    def edit
        @arm = Arm.find(params[:id])
        @arms = Arm.all.order(id: :desc)
        render(:index)
    end

    def update
        @arm = Arm.find(params[:id])

        if @arm.update(arm_params)
            redirect_to(arms_path)
        else 
            @error_messages = @arm.errors.full_messages
            render(:edit)
        end
    end

    def destroy
        @arm = Arm.find(params[:id])
        @arm.destroy
        redirect_to(arms_path)
    end

    private

    def arm_params
        params.require(:arm).permit(:chest_press, :shoulder_press, :row_rear_deltoid, :pull_down, :rear_deltoid, :pectoral_fly, :assisted_chin_up, :assisted_dips)
    end
end

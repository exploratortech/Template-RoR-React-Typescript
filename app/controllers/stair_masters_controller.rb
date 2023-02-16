class StairMastersController < ApplicationController
    def index
        @stair_masters = StairMaster.all
    end

    def new 
        @stair_master = StairMaster.new
    end

    def create
        @stair_master = StairMaster.new(stair_master_params)

        if @stair_master.save
            redirect_to stair_masters_path
        else 
            render(:new)
        end
    end

    def edit
        @stair_master = StairMaster.find(params[:id])
    end

    def update
        @stair_master = StairMaster.find(params[:id])

        if @stair_master.update(stair_master_params)
            redirect_to(stair_masters_path)
        else 
            @error_messages = @stair_master.errors.full_messages
            render(:edit)
        end
    end

    def destroy
        @stair_master = StairMaster.find(params[:id])
        @stair_master.destroy
        redirect_to(stair_masters_path)
    end

    private

    def stair_master_params
        params.require(:stair_master).permit(:distance, :time, :pace)
    end
end

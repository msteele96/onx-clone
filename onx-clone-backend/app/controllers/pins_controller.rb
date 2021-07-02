class PinsController < ApplicationController

    def index
        pins = Pin.all
        render json: PinSerializer.new(pins)
    end

    def show
        pin = Pin.find(params[:id])
        render json: PinSerializer.new(pin)
    end

    # def create
        
    # end
end

class PinsController < ApplicationController

    def index
        pins = Pin.all
        render json: PinSerializer.new(pins)
    end

    def show
        pin = Pin.find(params[:id])
        render json: PinSerializer.new(pin)
    end

    def create
        pin = Pin.new(style: params[:style], name: params[:name], latitude: params[:latitude], longitude: params[:longitude], notes: params[:notes], user_id: params[:userId])
        if pin.save!
            render json: PinSerializer.new(pin)
        end
    end
end

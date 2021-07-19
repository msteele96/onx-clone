class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def create
        user = User.find_by(username: params[:username])
        if user.authenticate(params[:password])
            render json: UserSerializer.new(user)
        end
    end
end

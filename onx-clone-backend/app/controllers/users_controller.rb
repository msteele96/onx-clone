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
        if user == nil
            new_user = User.create(username: params[:username], password: params[:password], password_confirmation: params[:confirm_password])
            render json: UserSerializer.new(new_user)
        elsif user.authenticate(params[:password])
            render json: UserSerializer.new(user)
        # else
        #     render json: {"data":{"id":"null"}}
        end
    end
end

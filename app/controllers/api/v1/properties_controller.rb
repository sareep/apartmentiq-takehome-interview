class Api::V1::PropertiesController < ApplicationController
  def index
    @properties = Property.all
    render json: @properties
  end

  def show
    @property = Property.find(params[:id])
  end
end

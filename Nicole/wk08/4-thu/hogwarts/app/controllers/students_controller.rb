class StudentsController < ApplicationController

  def index
    @students = Student.all
  end
  def new

  end

  def show
    @student = Student.find_by(id: params[:id])
  	@house = House.find_by(id: @student.house_id)
  end


end

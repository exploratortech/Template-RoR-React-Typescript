# frozen_string_literal: true

class HomeController < ApplicationController
  def landing
    @workouts = Workout.all
    @workout = Workout.new
  end

  def sweet_home
    render({ component: "SweetHomePage" })
  end
end

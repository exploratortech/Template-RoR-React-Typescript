# frozen_string_literal: true

class Workout < ApplicationRecord
  validates :distance, :duration, :pace, presence: true
end

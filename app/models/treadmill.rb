class Treadmill < ApplicationRecord
    validates :distance, :time, :avg_pace, presence: true
end

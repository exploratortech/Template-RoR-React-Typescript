class StairMaster < ApplicationRecord
    validates :distance, :time, :pace, presence: true
end

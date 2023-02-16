class Leg < ApplicationRecord
    validates :seated_leg_curl, :leg_extension, :seated_leg_press, :hip_abductor_out, :hip_abductor_in, :hip_thrusts, :bulgarian_split_squats, presence: true
end

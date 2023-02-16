class Arm < ApplicationRecord
    validates :chest_press, :shoulder_press, :row_rear_deltoid, :pull_down, :rear_deltoid, :pectoral_fly, :assisted_chin_up, :assisted_dips, presence: true
end

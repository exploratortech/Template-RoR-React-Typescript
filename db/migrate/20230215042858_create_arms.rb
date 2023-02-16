class CreateArms < ActiveRecord::Migration[6.1]
  def change
    create_table :arms do |t|
      t.integer(:chest_press)
      t.integer(:shoulder_press)
      t.integer(:row_rear_deltoid)
      t.integer(:pull_down)
      t.integer(:rear_deltoid)
      t.integer(:pectoral_fly)
      t.integer(:assisted_chin_up)
      t.integer(:assisted_dips)
      t.timestamps
    end
  end
end

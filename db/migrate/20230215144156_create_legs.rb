class CreateLegs < ActiveRecord::Migration[6.1]
  def change
    create_table :legs do |t|
      t.integer(:seated_leg_curl)
      t.integer(:leg_extension)
      t.integer(:seated_leg_press)
      t.integer(:hip_abductor_out)
      t.integer(:hip_abductor_in)
      t.integer(:hip_thrusts)
      t.integer(:bulgarian_split_squats)
      t.timestamps
    end
  end
end

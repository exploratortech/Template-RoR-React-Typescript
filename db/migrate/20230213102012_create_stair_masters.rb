class CreateStairMasters < ActiveRecord::Migration[6.1]
  def change
    create_table(:stair_masters) do |t|
      t.integer(:distance)
      t.integer(:time)
      t.integer(:pace)
      t.timestamps
    end
  end
end

class AddDateColumnToTreadmill < ActiveRecord::Migration[6.1]
  def change
    add_column :treadmills, :distance, :integer
    add_column :treadmills, :time, :integer
    add_column :treadmills, :avg_pace, :integer
    add_column :treadmills, :date, :date
  end
end

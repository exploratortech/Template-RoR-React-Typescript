class CreateTreadmills < ActiveRecord::Migration[6.1]
  def change
    create_table(:treadmills) do |t|
      t.timestamps
    end
  end
end

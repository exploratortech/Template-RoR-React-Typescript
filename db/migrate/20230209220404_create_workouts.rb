# frozen_string_literal: true

class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table(:workouts) do |t|
      t.integer(:distance)
      t.integer(:duration)
      t.integer(:pace)
      t.timestamps
    end
  end
end

class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.date :completion_date
      t.string :color
      t.string :time_require

      t.timestamps
    end
  end
end

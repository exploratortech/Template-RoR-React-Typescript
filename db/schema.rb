# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_15_161211) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "arms", force: :cascade do |t|
    t.integer "chest_press"
    t.integer "shoulder_press"
    t.integer "row_rear_deltoid"
    t.integer "pull_down"
    t.integer "rear_deltoid"
    t.integer "pectoral_fly"
    t.integer "assisted_chin_up"
    t.integer "assisted_dips"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "legs", force: :cascade do |t|
    t.integer "seated_leg_curl"
    t.integer "leg_extension"
    t.integer "seated_leg_press"
    t.integer "hip_abductor_out"
    t.integer "hip_abductor_in"
    t.integer "hip_thrusts"
    t.integer "bulgarian_split_squats"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stair_masters", force: :cascade do |t|
    t.integer "distance"
    t.integer "time"
    t.integer "pace"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "treadmills", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "distance"
    t.integer "time"
    t.integer "avg_pace"
    t.date "date"
  end

end

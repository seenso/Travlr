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

ActiveRecord::Schema.define(version: 2022_01_21_184521) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "url"
    t.string "hours"
    t.text "desc"
    t.integer "estimated_cost"
    t.integer "likes"
    t.bigint "vacation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["vacation_id"], name: "index_activities_on_vacation_id"
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "url"
    t.string "hours"
    t.text "desc"
    t.integer "estimated_cost"
    t.integer "likes"
    t.bigint "vacation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["vacation_id"], name: "index_foods_on_vacation_id"
  end

  create_table "lodgings", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "url"
    t.string "check_in"
    t.string "check_out"
    t.integer "estimated_cost"
    t.integer "likes"
    t.bigint "vacation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["vacation_id"], name: "index_lodgings_on_vacation_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vacation_users", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "vacation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_vacation_users_on_user_id"
    t.index ["vacation_id"], name: "index_vacation_users_on_vacation_id"
  end

  create_table "vacations", force: :cascade do |t|
    t.string "title"
    t.date "start_date"
    t.date "end_date"
    t.string "location"
    t.integer "number_of_food"
    t.integer "number_of_activities"
    t.integer "estimated_budget"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "activities", "vacations"
  add_foreign_key "foods", "vacations"
  add_foreign_key "lodgings", "vacations"
  add_foreign_key "vacation_users", "users"
  add_foreign_key "vacation_users", "vacations"
end

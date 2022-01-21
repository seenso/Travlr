class CreateVacations < ActiveRecord::Migration[6.1]
  def change
    create_table :vacations do |t|
      t.string :title
      t.date :start_date
      t.date :end_date
      t.string :location
      t.integer :number_of_food
      t.integer :number_of_activities
      t.integer :estimated_budget

      t.timestamps
    end
  end
end

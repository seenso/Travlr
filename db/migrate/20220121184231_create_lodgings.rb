class CreateLodgings < ActiveRecord::Migration[6.1]
  def change
    create_table :lodgings do |t|
      t.string :name
      t.string :address
      t.string :url
      t.time :check_in
      t.time :check_out
      t.integer :estimated_cost
      t.integer :likes
      t.references :vacation, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateLodgings < ActiveRecord::Migration[6.1]
  def change
    create_table :lodgings do |t|
      t.string :name
      t.string :address
      t.string :url
      t.string :check_in
      t.string :check_out
      t.integer :estimated_cost
      t.integer :likes
      t.references :vacation, null: false, foreign_key: true

      t.timestamps
    end
  end
end

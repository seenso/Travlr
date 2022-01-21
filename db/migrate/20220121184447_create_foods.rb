class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :address
      t.string :url
      t.string :hours
      t.text :desc
      t.integer :estimated_cost
      t.integer :likes
      t.references :vacation, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateVacationUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :vacation_users do |t|
      t.references :user, null: false, foreign_key: true
      t.references :vacation, null: false, foreign_key: true

      t.timestamps
    end
  end
end

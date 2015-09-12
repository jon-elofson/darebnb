class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.integer :max_people, null: false
      t.text :description, null: false
      t.integer :cost_per_night, null: false
      t.timestamps null: false
    end
    add_index :places, :user_id
  end
end

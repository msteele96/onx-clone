class CreatePins < ActiveRecord::Migration[6.1]
  def change
    create_table :pins do |t|
      t.string :style
      t.string :name
      t.decimal :latitude
      t.decimal :longitude
      t.text :notes
      t.integer :user_id

      t.timestamps
    end
  end
end

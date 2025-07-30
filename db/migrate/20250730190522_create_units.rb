class CreateUnits < ActiveRecord::Migration[8.0]
  def change
    create_table :units do |t|
      t.string :name
      t.integer :bedroom_count
      t.integer :bathroom_count
      t.integer :unit_sqft
      t.belongs_to :property_id

      t.timestamps
    end
  end
end

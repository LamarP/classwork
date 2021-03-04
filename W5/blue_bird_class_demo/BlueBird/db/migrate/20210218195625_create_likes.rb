class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :chirp_id, null: false
      t.integer :liker_id, null: false

      t.timestamp
    end

    # add_index :table_name, [:attribute1, :attribute2]
    add_index :likes, [:chirp_id, :liker_id], unique: true
  end
end

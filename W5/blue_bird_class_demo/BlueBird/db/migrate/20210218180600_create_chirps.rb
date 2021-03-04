class CreateChirps < ActiveRecord::Migration[5.2]
  def change
    create_table :chirps do |t|
      # a string is 250 characters or less, text is for longer strings
      t.text :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :chirps, :author_id # any foreign key should have an index on it
  end
end

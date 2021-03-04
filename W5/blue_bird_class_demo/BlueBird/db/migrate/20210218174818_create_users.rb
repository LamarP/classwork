class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false # null: false is a CONSTRAINT
      t.string :email, null: false

      # adds timestamps to table
      t.timestamps # always do this for every table!!
    end

    # add_index :table_name, :column_name, options
    # this adds indexing to a column so we can search it quickly
    add_index :users, :username, unique: true # unique: true is a CONSTRAINT
    add_index :users, :email, unique: true 
  end
end

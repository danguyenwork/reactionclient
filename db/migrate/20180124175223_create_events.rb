class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :keywords
      t.string :hashtags
      t.string :language
      t.datetime :start_time
      t.datetime :end_time
      t.string :img_url
      t.string :db_name
      t.timestamps
    end
  end
end

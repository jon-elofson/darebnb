class AddLatLongColumnsToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :lat, :float
    add_column :places, :long, :float
  end
end

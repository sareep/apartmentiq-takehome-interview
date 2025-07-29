# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Property.create!([
  { name: "My Property 1", address: "123 My Street", year_built: "1998", website_url: "test.com" },
  { name: "My Property 2", address: "456 My Street", year_built: "2020", website_url: "foo.com" }
])
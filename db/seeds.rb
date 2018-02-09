# This file should contain all the record creation needed to seed the database with its default values.", "# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).", "#", "# Examples:", "#", "#   movies = Movie.create([{ name: 'Star Wars' }", "{ name: 'Lord of the Rings' }])", "#   Character.create(name: 'Luke'", "movie: movies.first)", "

brands = ["Stella Artois", "Michelob Ultra", "Budweiser", "Avocados From Mexico", "Coca-cola", "Doritos",  "Mountain Dew", "Pepsi", "Febreze", "Groupon", "Hulu", "Hyundai", "Turbotax", "Intuit", "Kia", "Kraft", "Lexus", "Persil ProClean", "Pringles", "Squarespace", "Verizon", "WeatherTech"]

search = ["Stella Artois", "Michelob Ultra", "Budweiser", "Avocados From Mexico", "(Coca-Cola OR Coke)", "Doritos", "Mountain Dew OR Mtn Dew", "Pepsi", "Febreze", "Groupon", "Hulu", "Hyundai", "Turbotax", "Intuit", "Kia", "Kraft", "Lexus", "Persil ProClean", "Pringles", "Squarespace", "Verizon", "WeatherTech"]

img_name = ["stella_artois.png", "michelob_ultra.png", "budweiser.png", "avocados_from_mexico.png", "coca_cola.png", "doritos.png", "mountain_dew.png", "pepsi.png", "febreze.png", "Groupon.png", "Hulu.png", "Hyundai.png", "Turbotax.png", "Intuit.png", "Kia.png", "Kraft.png", "Lexus.png", "persil_proclean.png", "Pringles.png", "Squarespace.png", "Verizon.png", "WeatherTech.png"]


brands.each_with_index  {|brand, index|
  Event.create(name: brand, keywords: search[index], img_url: img_name[index], db_name: img_name[index].gsub('.png', ''))
}

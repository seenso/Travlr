puts "✈ Destroying existing seed data..."

Vacation.destroy_all
Lodging.destroy_all
Food.destroy_all
Activity.destroy_all
User.destroy_all
VacationUser.destroy_all

puts "✈ Ready to takeoff!"

# Vacation data
  Vacation.create(
    title: "Family Reunion",
    start_date: "2/14/2022",
    end_date: "2/20/2022",
    location: "Columbus, OH",
    number_of_food: 15,
    number_of_activities: 7,
    estimated_budget: 5000
  )

  Vacation.create(
    title: "Vegas Bday",
    start_date: "5/21/2022",
    end_date: "5/30/2022",
    location: "Las Vegas, NV",
    number_of_food: 21,
    number_of_activities: 12,
    estimated_budget: 15000
  )

  Vacation.create(
    title: "Girls Hawaii Trip",
    start_date: "7/8/2022",
    end_date: "7/18/2022",
    location: "Maui, HI",
    number_of_food: 23,
    number_of_activities: 9,
    estimated_budget: 8000
  )

puts "✈ Vacations created"

# Lodging data
# Vacation 1 (Columbus, OH)
Lodging.create(
  name: "Hilton",
  address: Faker::Address.street_address,
  url: "https://www.hilton.com",
  check_in: "10:00AM",
  check_out: "3:00PM",
  estimated_cost: Faker::Number.between(from: 500, to: 1200),
  likes: 0,
  vacation_id: 1
  )

  # Vacation 2 (Las Vegas, NV)
  Lodging.create(
    name: "Air BnB - Downtown Loft",
    address: Faker::Address.street_address,
    url: "airbnb.com",
    check_in: "8:00AM",
    check_out: "12:00PM",
    estimated_cost: Faker::Number.between(from: 500, to: 1200),
    likes: 0,
    vacation_id: 2
  )

  # Vacation 3 (Maui, HI)
  Lodging.create(
    name: "Hilton Hotel",
    address: Faker::Address.street_address,
    url: "hilton.com",
    check_in: "3:00PM",
    check_out: "11:00AM",
    estimated_cost: Faker::Number.between(from: 500, to: 1200),
    likes: 0,
    vacation_id: 3
  )

puts "✈ Lodging created"

# Food data
  # Vacation 1 (Columbus, OH)
  15.times do
    name = Faker::Restaurant.name
    Food.create(
      name: name,
      address: Faker::Address.street_address,
      url: "https://www.#{name}.com",
      hours: "8:00AM - 9:00PM",
      desc: Faker::Restaurant.description,
      estimated_cost: Faker::Number.between(from: 100, to: 400),
      likes: 0,
      vacation_id: 1
    )
  end

  # Vacation 2 (Las Vegas, NV)
  21.times do
    name = Faker::Restaurant.name
    Food.create(
      name: name,
      address: Faker::Address.street_address,
      url: "https://www.#{name}.com",
      hours: "9:00AM - 4:00AM",
      desc: Faker::Restaurant.description,
      estimated_cost: Faker::Number.between(from: 400, to: 800),
      likes: 0,
      vacation_id: 2
    )
  end

  # Vacation 3 (Maui, HI)
    23.times do
      name = Faker::Restaurant.name
      Food.create(
        name: name,
        address: Faker::Address.street_address,
        url: "https://www.#{name}.com",
        hours: "10:00AM - 5:00PM",
        desc: Faker::Restaurant.description,
        estimated_cost: Faker::Number.between(from: 250, to: 400),
        likes: 0,
        vacation_id: 3
      )
  end

puts "✈ Food created"

# Activity data
  # Vacation 1 (Columbus, OH)
  7.times do
    vendor = Faker::Company.name
    Activity.create(
      name: "#{vendor}",
      address: Faker::Address.street_address,
      url: "https://www.#{vendor}.com",
      hours: "7:30AM - 6:00PM",
      desc: Faker::Lorem.paragraph(sentence_count: 2),
      estimated_cost: Faker::Number.between(from: 50, to: 500),
      likes: 0,
      vacation_id: 1
    )
  end

  # Vacation 2 (Las Vegas, NV)
  12.times do
    vendor = Faker::Company.name
    Activity.create(
      name: "#{vendor}",
      address: Faker::Address.street_address,
      url: "https://www.#{vendor}.com",
      hours: "6:00AM - 1:00AM",
      desc: Faker::Lorem.paragraph(sentence_count: 2),
      estimated_cost: Faker::Number.between(from: 50, to: 500),
      likes: 0,
      vacation_id: 2
    )
  end

  # Vacation 3 (Maui, HI)
  9.times do
    vendor = Faker::Company.name
    Activity.create(
      name: "#{vendor}",
      address: Faker::Address.street_address,
      url: "https://www.#{vendor}.com",
      hours: "9:00AM - 5:00PM",
      desc: Faker::Lorem.paragraph(sentence_count: 2),
      estimated_cost: Faker::Number.between(from: 150, to: 900),
      likes: 0,
      vacation_id: 3
    )
  end

puts "✈ Activities created"

# User data
10.times do
  fakeName = Faker::Name.unique.first_name
  User.create(
    username: fakeName,
    email: "#{fakeName}@email.com"
  )
end

puts "✈ Users created"

# Vacation_User data
  # Vacation 1 (3 users)
  id = 1
  
  3.times do
    VacationUser.create(
      user_id: 1,
      vacation_id: 1
    )
    id += 1
  end

  # Vacation 2 (3 users)
  3.times do
    VacationUser.create(
      user_id: id,
      vacation_id: 2
    )
    id += 1
  end

  # Vacation 3 (4 users)
  4.times do
    VacationUser.create(
      user_id: id,
      vacation_id: 3
    )
    id += 1
  end

puts "✈ Vacation_Users created"

puts "✈✈✈✈✈ Done seeding! ✈✈✈✈✈"
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
    start_date: "2022-01-01",
    end_date: "2022-01-15",
    location: "Columbus, OH",
    number_of_food: 4,
    number_of_activities: 2,
    estimated_budget: 5000
  )
  Vacation.create(
    title: "Vegas Bday",
    start_date: "2022-05-12",
    end_date: "2022-05-19",
    location: "Las Vegas, NV",
    number_of_food: 3,
    number_of_activities: 3,
    estimated_budget: 15000
  )
  Vacation.create(
    title: "Girls Hawaii Trip",
    start_date: "2022-12-20",
    end_date: "2022-12-29",
    location: "Maui, HI",
    number_of_food: 8,
    number_of_activities: 5,
    estimated_budget: 8000
  )
  Vacation.create(
    title: "Post Grad Trip",
    start_date: "2022-06-03",
    end_date: "2022-06-15",
    location: "Orlando, FL",
    number_of_food: 7,
    number_of_activities: 4,
    estimated_budget: 4000
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
# Vacation 1 (Columbus, OH)
Lodging.create(
  name: "Hyatt",
  address: Faker::Address.street_address,
  url: "https://www.hyatt.com",
  check_in: "3:00PM",
  check_out: "12:00PM",
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
 # Vacation 4 (Orlando, FL)
 Lodging.create(
  name: "Disney's Contemporary Resort",
  address: Faker::Address.street_address,
  url: "http://disneyworld.go.com",
  check_in: "3:00PM",
  check_out: "11:00AM",
  estimated_cost: Faker::Number.between(from: 500, to: 1200),
  likes: 0,
  vacation_id: 4
)
 # Vacation 4 (Orlando, FL)
 Lodging.create(
  name: "Disney's Art of Animation",
  address: Faker::Address.street_address,
  url: "http://disneyworld.go.com",
  check_in: "3:00PM",
  check_out: "11:00AM",
  estimated_cost: Faker::Number.between(from: 500, to: 1200),
  likes: 0,
  vacation_id: 4
)


puts "✈ Lodging created"
# Food data
  # Vacation 1 (Columbus, OH)
  10.times do
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
  16.times do
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
    15.times do
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
    # Vacation 4 (Orlando, FL)
    12.times do
      name = Faker::Restaurant.name
      Food.create(
        name: name,
        address: Faker::Address.street_address,
        url: "https://www.#{name}.com",
        hours: "10:00AM - 5:00PM",
        desc: Faker::Restaurant.description,
        estimated_cost: Faker::Number.between(from: 250, to: 400),
        likes: 0,
        vacation_id: 4
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
    # Vacation 4 (Orlando, FL)
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
        vacation_id: 4
      )
    end
puts "✈ Activities created"
# User data
10.times do
  fakeName = Faker::Name.unique.first_name
  User.create(
    username: fakeName,
    email: "#{fakeName}@email.com",
    password: "1234"
  )
end
puts "✈ Users created"
# Vacation_User data
  # Vacation 1 (3 users)
  
  3.times do
    VacationUser.create(
      user_id: rand(1..10),
      vacation_id: 1
    )
  end
  # Vacation 2 (3 users)
  3.times do
    VacationUser.create(
      user_id: rand(1..10),
      vacation_id: 2
    )
  end
  # Vacation 3 (4 users)
  4.times do
    VacationUser.create(
      user_id: rand(1..10),
      vacation_id: 3
    )
  end

    # Vacation 4 (5 users)
  5.times do
      VacationUser.create(
        user_id: rand(1..10),
        vacation_id: 4
    )
  end
    # Vacation 3 (4 users)
  5.times do
      VacationUser.create(
        user_id: rand(1..10),
        vacation_id: 4
    )
  end
puts "✈ Vacation_Users created"
puts "✈✈✈✈✈ Done seeding! ✈✈✈✈✈"
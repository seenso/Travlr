class VacationSerializer < ActiveModel::Serializer
  attributes :id, :title, :start_date, :end_date, :location, :number_of_food, :number_of_activities, :estimated_budget, :users
  has_many :lodgings
  has_many :foods
  has_many :activities
  has_many :users
end

class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :url, :hours, :desc, :estimated_cost, :likes
  has_one :vacation
end

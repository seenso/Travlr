class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :url, :hours, :desc, :estimated_cost, :likes, :vacation
  has_one :vacation
end
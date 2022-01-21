class LodgingSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :url, :check_in, :check_out, :estimated_cost, :likes
  has_one :vacation
end

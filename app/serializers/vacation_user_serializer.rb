class VacationUserSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :vacation
end

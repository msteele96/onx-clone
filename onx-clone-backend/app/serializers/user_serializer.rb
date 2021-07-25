class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :pins
  # has_many :pins
end

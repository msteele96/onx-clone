class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :pins
end

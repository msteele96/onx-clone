class PinSerializer
  include JSONAPI::Serializer
  attributes :style, :name, :latitude, :longitude, :notes
  attribute :user do |object|
    object.user.as_json
  end
end

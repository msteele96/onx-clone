class PinSerializer
  include JSONAPI::Serializer
  attributes :style, :name, :latitude, :longitude, :notes, :user_id
  # attribute :user do |object|
  #   object.user.as_json
  # end
end

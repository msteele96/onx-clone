class PinSerializer
  include JSONAPI::Serializer
  attributes :style, :name, :latitude, :longitude, :notes
  # belongs_to :user
  attribute :user do |object|
    object.user.as_json
  end
end

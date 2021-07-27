class Pin < ApplicationRecord
    belongs_to :user
    validates :style, presence: true
    validates :latitude, presence: true
    validates :longitude, presence: true
end

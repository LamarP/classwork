class Like < ApplicationRecord
  # we don't need to set up presence validations because our
  # associations will automatically do that.

  # the combination of liker_id and chirp_id must be unique.
  validates :liker_id, uniqueness: { scope: :chirp_id }

  belongs_to :chirp,
    foreign_key: :chirp_id,
    class_name: :Chirp

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User
end
# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord
  validates :body, :author_id, presence: true
  validate :body_too_long

  def body_too_long
    if body && body.length > 140
      errors[:body] << 'is too long.'
    end
  end

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :likes,
    foreign_key: :chirp_id,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :liker

  User.find_by(username: 'wakka_wakka').chirps
  Chirp.joins(:author).where(users: { username: 'wakka_wakka' })
   #class name (association name).where table_name #column: #value searching by

end

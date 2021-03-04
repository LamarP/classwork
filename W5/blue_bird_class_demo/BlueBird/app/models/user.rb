# == Schema Information
#
# Table name: users
#
#  id                    :bigint           not null, primary key
#  username              :string           not null
#  email                 :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  age                   :integer          not null
#  political_affiliation :string           not null
#
class User < ApplicationRecord
  # validates :column_name1, :column_name2, validation: one, validation: two
  # check schema to see which ones need uniquness!
  validates :username, :email, presence: true, uniqueness: true
  validates :age, :political_affiliation, presence: true

  has_many :chirps,
    class_name: :Chirp,
    foreign_key: :author_id,
    primary_key: :id

  has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like

  has_many :liked_chirps,
    through: :likes,
    source: :chirp

  User.first

  User.last

  User.find(13)

  User.find_by(13)

  User.select(:username, :political_affiliation).where('age >= 10 AND age <= 20')
  User.select(:username, :political_affiliation).where(age: 10..20)
  User.where.not(age: 0..11)
  User.where.not('age < ?', 11)

  User.all.select(:political_affiliation).distinct
  User.where(political_affiliation: political_affiliation).order(username: :desc)
  
  


end

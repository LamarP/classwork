class ShortenedUrl < ApplicationRecord
  validates :short_url, presence: true, uniqueness: true
  validates :user_id, presence: true
  validate :short_shorter_than_long

  def short_shorter_than_long
    unless self.short_url.length < self.long_url.length
      errors[:short_url] << "must be shorter than long url"
    end
  end
end

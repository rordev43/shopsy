# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  price       :float            not null
#  description :string           not null
#  seller_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string           not null
#  featured    :boolean          default(FALSE), not null
#

class Product < ApplicationRecord
  validates :title, :image_url, :price, :description, presence: true
  validates :title, uniqueness: true

  after_create :ensure_all_products

  belongs_to :seller,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :User

  has_many :comments
  has_many :cart_items
  has_many :category_products

  has_many :categories, through: :category_products, source: :category

  include PgSearch

  pg_search_scope :search_by_product_details,
                  against: [:title, :description],
                  using: {
                    tsearch: { any_word: true, prefix: true }
                  }


  private 

  def ensure_all_products
    cat_id = Category.find_by(name: "All Products").id
    @category_product = CategoryProduct.new(product_id: self.id, category_id: cat_id)
    @category_product.save!
  end
end

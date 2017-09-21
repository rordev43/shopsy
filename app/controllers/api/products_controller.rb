class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render 'api/products/index'
  end

  def show
    @product = Product.find(params[:id])
    render 'api/products/show'
  end

  private

  def product_params
    params.require(:product).permit(:title,
                                    :price,
                                    :description,
                                    :image_url
                                    )
  end
end

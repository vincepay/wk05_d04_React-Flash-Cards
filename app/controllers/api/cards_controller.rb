class Api::CardsController < ApplicationController
  def index
    render json: card.all
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else
      render json: { errors: card.errors }, status: :unprocessable_entity 
    end
  end

  def update
    card = Card.find(params[:id])
    card.update(complete: !card.complete)
    render json: card
  end

  def destroy
    Card.find(params[:id]).destroy
    render json: { message: 'card deleted' }
  end

  private

  def card_params
    params.require(:card).permit(:name, :complete)
  end

end

class StaticPagesController < ApplicationController

  before_action :authenticate_user!, except: :splash

  def splash
  end

  def home
  end


end

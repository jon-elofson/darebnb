class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :authenticate_user!

  # helper_method :current_user, :logged_in?, :ensure_logged_in

  # def login!(user)
  #   session[:session_token] = user.reset_session_token!
  # end
  #
  # def logout!
  #   session[:session_token] = nil;
  # end
  #
  # def current_user
  #   User.find_by_session_token(session[:session_token])
  # end
  #
  # def logged_in?
  #   !!current_user
  # end
  #
  # def ensure_logged_in
  #   return if logged_in?
  #   redirect_to new_session_url
  # end



end

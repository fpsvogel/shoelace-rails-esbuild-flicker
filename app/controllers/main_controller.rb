class MainController < ApplicationController
  def home
    delay
  end

  def about
    delay
  end

  private

  def delay
    x = 0
    (1..10000000).each do |n|
      x += n
    end
  end
end

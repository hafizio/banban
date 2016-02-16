class HomeController < ApplicationController
  def index
    @tasks = [{ id:1, task: 'Tidur' }, { id: 2, task: 'Basuh Baju' }, { id: 3, task: 'Urut mami' }]
  end
end

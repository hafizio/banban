class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Hafiz" }
    @tasks = [{ id:1, task: 'Mandi' }, { id: 2, task: 'Basuh Baju' }, { id: 3, task: 'Urut mami' }]
  end
end

require 'rails_helper'

RSpec.describe Idea, type: :model do
  it 'creates successful idea' do
    idea = Idea.new(title: "idea", body: "so good")
    expect(idea).to be_valid
  end

  it 'cannot create idea without title' do
    idea = Idea.new(body: "so good")
    expect(idea).to_not be_valid
  end

  it 'cannot create idea without body' do
    idea = Idea.new(title: 'idea')
    expect(idea).to_not be_valid
  end
end

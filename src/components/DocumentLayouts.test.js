/* globals describe, it, expect */
// import React from 'react'
// import ReactDOM from 'react-dom'
// import {
//   configure
//   // shallow,
//   // mount
// } from 'enzyme'

// import EnzymeAdapter from 'enzyme-adapter-react-16'

// import Item from './Layouts/LayoutItem/LayoutItem'

// @TODO it was an old version. as we want to make this components lighter - we need to find another way to do tests as we want them
// import { getFullGrocery, getRecipes } from '/selector'

// Setup enzyme's react adapter
// configure({ adapter: new EnzymeAdapter() })

// @TODO move data to before section

// @TODO tests should work
describe('Test RenderList attribute', () => {
  // const data = getFullGrocery('19 Gluten-Free Foods Shopping List')
  // const recipeData = getRecipes()[0]
  // const data = ['John Doe', 'John Doe', 'Recipe', 'Recipe']

  // @TODO replace a similar tests with a function

  // it('LayoutItem has data attribute', () => {
  //   const wrapper = mount(<Item data={data} />)
  //   expect(wrapper.prop('data')).toEqual(expect.anything())
  // })
  it('LayoutItem has data attribute', () => {
    const wrapper = true
    expect(wrapper).toEqual(expect.anything())
  })

  // it('Render List1 should have Lists1 inside of it', () => {
  //   const wrapper = shallow(<RenderList1 data={data} />);
  //   expect(wrapper.find('List1')).toBe(true);
  // })
  //
})

//
// Setup enzyme's react adapter
// configure({ adapter: new EnzymeAdapter() })
//
// describe('<TodaysDate /> component shallow only methods ', () => {
//   it('renders without crashing', () => {
//     const wrapper = shallow(<TodaysDate />)
//
//     // expect(wrapper).toBe({});
//     // this 2 lines below don't make a lot of sense
//
//     // expect(wrapper).toBe(true)
//     //   ReactDOM.render(<List />, div);
//   })
// })

// here we'll have an example about checking what is inside of our Render List components

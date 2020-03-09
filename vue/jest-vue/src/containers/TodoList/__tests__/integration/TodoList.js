import { mount } from '@vue/test-utils'
import { findTestWrapper } from '../../../../utils/testUtils.js'
import TodoList from '../../TodoList.vue'

it(`
  1. 用户会在header输入框输入内容
  2. 用户会点击回车按钮
  3. 列表项应该增加用户输入内容的列表项
`, () => {
  const wrapper = mount(TodoList)
  const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
  inputElem.setValue(1)
  inputElem.trigger('change')
  inputElem.trigger('keyup.enter')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(listItems.length).toBe(1)
  expect(listItems.at(0).text()).toContain(1)
})
import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header.vue'

it('TodoItem 初始化时，UndoList为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([])
})

it('TodoItem 监听到 Header 的 add 事件时，会增加一个内容', () => {
  const wrapper = shallowMount(TodoList)
  // wrapper.vm.addUndoItem('dell lee');
  const header = wrapper.find(Header)
  header.vm.$emit('add', 'dell lee')
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual(['dell lee'])
})

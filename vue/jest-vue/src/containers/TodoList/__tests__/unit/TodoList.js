import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList.vue'

it('TodoItem 初始化时，UndoList为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([])
})

it('TodoItem 中 addUndoItem 被执行后，内容会增加一项', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [1, 2, 3]
  })
  wrapper.vm.addUndoItem(4)
  expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
})

it('TodoList 调用 UndoList，应该传递 list 参数', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.find(UndoList)
  const list = undoList.props('list')
  expect(list).toBeTruthy()
})

it('TodoList 中 handleDeleteaItem 方法被调用时，UndoList 列表内容会减少一个', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [1, 2, 3]
  })
  wrapper.vm.handleItemDelete(1)
  expect(wrapper.vm.$data.undoList).toEqual([1, 3])
})

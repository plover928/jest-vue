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
    undoList: [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
  })
  wrapper.vm.addUndoItem(4)
  expect(wrapper.vm.$data.undoList).toEqual(
    [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 },
      { status: 'div', value: 4 }
    ]
  )
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
    undoList: [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
  })
  wrapper.vm.handleItemDelete(1)
  expect(wrapper.vm.$data.undoList).toEqual([
    { status: 'div', value: 1 },
    { status: 'div', value: 3 }
  ])
})

it('TodoList 中 changeStatus 方法被调用时，UndoList 列表内容变化', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
  })
  wrapper.vm.changeStatus(1)
  expect(wrapper.vm.$data.undoList).toEqual([
    { status: 'div', value: 1 },
    { status: 'input', value: 2 },
    { status: 'div', value: 3 }
  ])
})

it('resetStatus 方法执行时，UndoList 内容变化', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ]
  })
  wrapper.vm.resetStatus(1)
  expect(wrapper.vm.$data.undoList).toEqual([
    { status: 'div', value: 1 },
    { status: 'div', value: 2 },
    { status: 'div', value: 3 }
  ])
})

it('changeItemValue 方法执行时，UndoList 内容变化', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ]
  })
  wrapper.vm.changeItemValue({
    index: 1,
    value: "444"
  })
  expect(wrapper.vm.$data.undoList).toEqual([
    { status: 'div', value: 1 },
    { status: 'input', value: "444" },
    { status: 'div', value: 3 }
  ])
})
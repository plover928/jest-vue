<template>
  <div>
    <Header @add="addUndoItem"></Header>
    <UndoList :list="undoList" @delete="handleItemDelete()"></UndoList>
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'

export default {
  name: 'TodoList',
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(inputValue)
    },
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    }
  },
  components: {
    Header,
    UndoList
  }
}
</script>

<style scoped lang="stylus">

</style>

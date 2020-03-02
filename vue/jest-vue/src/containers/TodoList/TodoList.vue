<template>
  <div>
    <Header @add="addUndoItem"></Header>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'TodoList',
  props: {},
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(inputValue)
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="stylus">

</style>

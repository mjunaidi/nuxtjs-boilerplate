<template>
  <div class="container">
  </div>
</template>

<script>
import * as Util from '~/plugins/Util'

export default {
  props: ['props'],
  beforeCreate () {

  },
  created() {

  },
  methods: {
    info(n) {
      this.$message.info(n||'test')
    },
  },
  computed: {
    cache() {
      return {}
    },
  },
}
</script>

<style>

</style>

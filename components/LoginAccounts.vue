<template>
  <div>
    <h2>Login Accounts</h2>
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

<template>
  <div class="container">
    <div class="mb-3">
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Settings</a></a-breadcrumb-item>
        <a-breadcrumb-item>Account</a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div>
      <div class="float-right">
        <a-button htmlType="button" class="mr-3">Cancel</a-button>
        <a-button type="primary" htmlType="submit">Save</a-button>
      </div>
      <h1>Account</h1>
    </div>

    <div class="mb-5">
      <a-card :bordered="false">
        <account v-bind:props="{data}"></account>
      </a-card>
    </div>

    <div class="mb-3">
      <div class="float-right">
        <a-button htmlType="button" class="mr-3">Cancel</a-button>
        <a-button type="primary" htmlType="submit">Save</a-button>
      </div>
      <h1>&nbsp;</h1>
    </div>
  </div>
</template>

<script>
import * as Util from '~/plugins/Util'
import Account from '~/components/Account'
import data from '~/static/profile-data.json'

export default {
  components: {
    Account,
  },
  props: ['props'],
  beforeCreate () {

  },
  created() {

  },
  data() {
    return {
      data,
    }
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
.container {
  background: #ececec;
  padding: 30px;
}
</style>

<template>
  <a-layout id="app">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item>
          <a-input placeholder="Basic usage"/>
        </a-menu-item>
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
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
#app .logo {
  width: 200px;
  height: 100%;
  background: url("~assets/images/logo.svg");
  /*margin: 16px 28px 0 0;*/
  margin-top: 5px;
  float: left;
  background-size: 13rem;
}
.ant-layout-header {
  padding: 0;
}
</style>

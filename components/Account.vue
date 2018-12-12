<template>
  <div>
    <a-row>
      <!-- menu -->
      <a-col :span="5">
        <a-menu
          :mode="mode"
          :theme="theme"
          @click="handleChangeMenu"
          class="mt-5"
        >
          <a-menu-item v-for="e in modules" :key="e.name" :style="{fontWeight:'500'}">
            {{e.label||e.name}}
          </a-menu-item>
        </a-menu>
      </a-col>

      <!-- main content -->
      <a-col :span="19">
        <div class="main-container" :style="{paddingTop:'24px'}">
          <component
            v-bind:is="selected"
            v-bind:props="props"
          ></component>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Profile from '~/components/Profile'
import ChangeEmail from '~/components/ChangeEmail'
import ChangePassword from '~/components/ChangePassword'
import LoginAccounts from '~/components/LoginAccounts'
import * as Util from '~/plugins/Util'

export default {
  components: {
    Profile,
    ChangeEmail,
    ChangePassword,
    LoginAccounts,
  },
  props: ['props'],
  beforeCreate() {

  },
  created() {

  },
  data() {
    const modules = [
      {name: 'profile',},
      {name: 'changeEmail',},
      {name: 'changePassword',},
      {name: 'loginAccounts',},
    ]
    modules.forEach(e=>e.label=Util.labelify(e.name))
    const selected = modules[0].name
    return {
      modules,
      selected,
      mode: 'inline',
      theme: 'light',
    }
  },
  methods: {
    handleChangeMenu(event) {
      const {key} = event
      this.selected = key
    }
  }
}
</script>

<style>
.main-container {
  padding: 0 8px 64px 64px;
  min-height: 500px;
  overflow: hidden;
  border-left: 1px solid #ebedf0;
  margin-left: -1px;
}
.ant-menu-item-selected, .ant-menu-item-selected>a, .ant-menu-item-selected>a:hover {
  color: #1890ff;
  background-color: #fff !important;
}
</style>

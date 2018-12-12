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
        <a-menu-item key="search">
          <a-input placeholder="Search" v-model="q" ref="q" size="large" class="mr-3">
            <a-icon slot="prefix" type="search" />
          </a-input>
        </a-menu-item>
        <a-menu-item key="plus">
          <a-button type="primary" shape="circle" icon="plus"></a-button>
        </a-menu-item>
        <a-menu-item key="items">
          <a-icon type="database" />
        </a-menu-item>
        <a-menu-item key="notification">
          <a-icon type="bell" />
        </a-menu-item>
        <a-menu-item key="message">
          <a-icon type="message" />
        </a-menu-item>
        <a-menu-item key="progress">
          <a-icon type="loading" />
        </a-menu-item>
        <a-sub-menu key="user">
          <div slot="title">
            <a-row>
              <a-col :span="4">
                <a-icon type="user" />
              </a-col>
              <a-col :span="20">
                <div>{{data.fullName}}</div>
                <div>{{data.category}}</div>
              </a-col>
            </a-row>
          </div>
          <a-menu-item key="logout">Logout</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <!-- left menu -->
        <div v-for="e in links" class="left-menu mt-5 mb-10">
          <h3 v-if="typeof(e.name)==='string'&&e.name.length>0">{{e.name}}</h3>
          <a-menu
            mode="inline"
            :style="{ borderRight: 0 }"
          >
            <a-menu-item v-for="e1 in e.list" :key="e1.name">
              <a-icon :type="e1.icon" />
              <span>{{e1.name}}</span>
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <!-- breadcrumb -->
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Settings</a></a-breadcrumb-item>
          <a-breadcrumb-item>Account</a-breadcrumb-item>
        </a-breadcrumb>

        <!-- content header -->
        <div class="mb-3">
          <div class="float-right">
            <a-button htmlType="button" class="mr-3">Cancel</a-button>
            <a-button type="primary" htmlType="submit">Save</a-button>
          </div>
          <h1>Account</h1>
        </div>

        <!-- main content -->
        <div class="mb-5">
          <a-layout-content :style="{ background: '#fff', margin: 0, minHeight: '280px' }">
            <account :props="{data}"></account>
          </a-layout-content>
        </div>

        <!-- content footer -->
        <div class="mb-3">
          <div class="float-right">
            <a-button htmlType="button" class="mr-3">Cancel</a-button>
            <a-button type="primary" htmlType="submit">Save</a-button>
          </div>
        </div>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import * as Util from '~/plugins/Util'
import Account from '~/components/Account'
import data from '~/static/profile-data.json'

const links = [
  {
    name: '',
    list: [
      {name:'Home', icon:'home'},
      {name:'Live', icon:'wifi'},
      {name:'Orders', icon:'schedule'},
      {name:'Fleet', icon:'car'},
      {name:'Customers', icon:'team'},
      {name:'Analytics', icon:'line-chart'},
      {name:'Chats', icon:'message'},
      {name:'Scan', icon:'barcode'},
    ],
  },
  {
    name: 'Services',
    list: [
      {name: 'Services', icon:'gift'},
      {name: 'Coverages', icon:'environment-o'},
      {name: 'Consignments', icon:'solution'},
      {name: 'Items', icon:'database'},
    ]
  },
  {
    name: 'Finances',
    list: [
      {name: 'Billing', icon: 'form'},
      {name: 'Discounts', icon: 'wallet'},
      {name: 'Referral', icon: 'usergroup-add'},
      {name: 'Campaigns', icon: 'notification'},
    ]
  },
  {
    name: 'Settings',
    list: [
      {name: 'Settings', icon: 'setting'},
      {name: 'Apps', icon: 'cloud-download-o'},
    ],
  }
]

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
      collapsed: false,
      q: '',
      links,
      data,
    }
  },
  methods: {
    info(n) {
      this.$message.info(n||'test')
    },
    onSearch() {
      this.$message.info('searching...')
    }
  },
  computed: {
    cache() {
      return {}
    },
  },
}
</script>

<style>
.ant-layout-header, .ant-menu-dark {
  background: #0063d4;
}
.ant-layout-header .ant-input-affix-wrapper .ant-input-prefix {
  color: white;
}
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected, .ant-menu.ant-menu-dark .ant-menu-item-selected {
  background-color: #0063d4 !important;
}
.ant-layout-header input {
  background-color: #408adf;
  border: none;
}
.logo {
  width: 120px;
  height: 31px;
  background: url('~assets/images/logo.svg');
  margin: 16px 28px 16px 0;
  float: left;
}
/*navbar*/
.ant-menu-submenu-title .ant-row > div > div {
  line-height: 24px;
}
/* left menu */
.left-menu h3 {
  padding-left: 24px;
  text-transform: uppercase;
  color: #97b1c7;
}
.left-menu .ant-menu-item {
  margin-bottom: 0;
  line-height: 24px;
  height: 24px;
}
.left-menu .ant-menu-item > span {
  font-weight: bold;
}
</style>

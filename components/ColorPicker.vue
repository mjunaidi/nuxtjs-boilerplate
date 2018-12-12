<template>
  <div>
    <a-popover
      placement="bottom"
      trigger="click"
      v-model="visible"
      class="mr-3"
    >
      <template slot="content">
        <a-row>
          <a-col :span="4">R</a-col>
          <a-col :span="12">
            <a-slider :min="min" :max="max" v-model="r" class="mr-3" />
          </a-col>
          <a-col :span="8">
            <a-input-number
              :min="min"
              :max="max"
              v-model="r"
              class="color-input"
            />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4">G</a-col>
          <a-col :span="12">
            <a-slider :min="min" :max="max" v-model="g" class="mr-3" />
          </a-col>
          <a-col :span="8">
            <a-input-number
              :min="min"
              :max="max"
              v-model="g"
              class="color-input"
            />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4">B</a-col>
          <a-col :span="12">
            <a-slider :min="min" :max="max" v-model="b" class="mr-3" />
          </a-col>
          <a-col :span="8">
            <a-input-number
              :min="min"
              :max="max"
              v-model="b"
              class="color-input"
            />
          </a-col>
        </a-row>
      </template>
      <template slot="title">
        <span>Choose color</span>
      </template>
      <a-button class="color-picker">
        <div :style="{backgroundColor:color}"></div>
      </a-button>
    </a-popover>
    <span>{{color}}</span>
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
  data() {
    const data = {}
    let {color} = this.props||{}
    if (typeof(color)==='string'&&color.length>0) {
      // do nothing
    } else {
      color = '#FFFFFF'
    }
    const rgb = color.slice(1)
    const r = parseInt(rgb.slice(0,2),16)
    const g = parseInt(rgb.slice(2,4),16)
    const b = parseInt(rgb.slice(4,6),16)
    return {
      color,
      r,
      g,
      b,
      min:0,
      max:255,
      visible: false,
    }
  },
  watch: {
    r(n) {
      if (typeof(n)==='number') {
        const r = Util.toHex(n)
        const g = Util.toHex(this.g)
        const b = Util.toHex(this.b)
        this.color = `#${r}${g}${b}`
      }
    },
    g(n) {
      if (typeof(n)==='number') {
        const r = Util.toHex(this.r)
        const g = Util.toHex(n)
        const b = Util.toHex(this.b)
        this.color = `#${r}${g}${b}`
      }
    },
    b(n) {
      if (typeof(n)==='number') {
        const r = Util.toHex(this.r)
        const g = Util.toHex(this.g)
        const b = Util.toHex(n)
        this.color = `#${r}${g}${b}`
      }
    },
  },
  methods: {
    info(n) {
      this.$message.info(n||'test')
    },
    hide() {
      this.visible = false
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
.color-picker {
  padding: 4px;
  vertical-align: middle;;
}
.color-picker > div {
  width: 120px;
  height: 100%;
}
.color-input {
  width: 50px;
}
</style>

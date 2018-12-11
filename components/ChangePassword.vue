<template>
  <div>
    <div v-for="section in sections" :key="section.title">
      <re-form v-bind:props="section"></re-form>
    </div>
  </div>
</template>

<script>
import ReForm from '~/components/ReForm'

export default {
  components: {
    ReForm
  },
  props: ['props'],
  beforeCreate () {

  },
  data() {
    const {data} = this.props
    const sections = [
      {
        title: 'Change password',
        data,
        fields: [
          {name:'newPassword',type:'password'},
          {name:'confirmPassword',type:'password'},
        ]
      },
    ]
    return {
      sections,
    }
  }
}
</script>

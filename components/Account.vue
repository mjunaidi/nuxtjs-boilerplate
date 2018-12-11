<template>
  <div>
    <div v-for="section in sections" :key="section.title">
      <re-form v-bind:props="section"></re-form>
    </div>
  </div>
</template>

<script>
import ReForm from '~/components/ReForm'

const countries = ['Malaysia', 'USA']
const states = ['Perlis', 'Kedah']

const currencies = ['Ringgit Malaysia', 'US Dollar']
const timezones = ['(GMT+8:00) Kuala Lumpur']
const dateFormats = ['DD/MM/YY']
const timeFormats = ['24 hours (1430)']
const unitSystems = ['Metric (km, cm, kg, km/h)']

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
        title: 'Profile',
        data,
        fields: [
          {name:'email',type:'text',readOnly:true,link:{
            label:'Change email',
          }},
          {name:'phone',type:'text',readOnly:true,link:{
            label:'Change phone',
          }},
          {name:'fullName',type:'text',required:true},
          {name:'profilePhoto',type:'image'},
          {name:'companyName',type:'text'},
          {name:'companyLogo',type:'image'},
          {name:'companyIcon',type:'image'},
          {name:'addressLine1',type:'text'},
          {name:'addressLine2',type:'text'},
          {name:'postalCode',type:'text',maxLength:10,},
          {name:'city',type:'text'},
          {name:'country',type:'select',options:countries},
          {name:'state',type:'select',options:states},
        ]
      },
      {
        title: 'Format and measurement',
        data,
        fields: [
          {name:'currency',type:'select', options:currencies},
          {name:'timezone',type:'select', options:timezones},
          {name:'dateFormat',type:'select', options:dateFormats},
          {name:'timeFormat',type:'select', options:timeFormats},
          {name:'unitSystem',type:'select', options:unitSystems},
        ]
      },
      {
        title: 'Theme',
        data,
        fields: [
          {name:'theme',type:'select',options:['light','dark']},
          {name:'primaryColor', type:'color'},
          {name:'secondaryColor', type:'color'},
          {name:'systemLogo', type:'radio',options: ['Use default', 'Use company logo and icon']},
        ]
      },
    ]
    return {
      sections,
    }
  }
}
</script>

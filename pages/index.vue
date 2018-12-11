<template>
  <div id="app" class="container">
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
        <a-row>

          <!-- menu -->
          <a-col :span="5">
            <a-menu
              v-for="e in links"
              :key="e"
            >
              <a-menu-item key="1">{{e}}</a-menu-item>
            </a-menu>
          </a-col>

          <!-- main content -->
          <a-col :span="15">
            <div class="main-container">
              <div v-for="(section,i) in sections" :key="section.title">
                <a-divider v-if="i>0" />
                <h2>{{section.title}}</h2>

                <a-form @submit="handleSubmit" :form="form">
                  <a-form-item
                    v-for="e in section.fields"
                    :key="e.name"
                    v-bind:label="labelify(e.name)"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 12 }"
                    class="mb-3"
                  >
                    <!-- field -->
                    <template v-if="e.type==='text'">
                      <template v-if="e.readOnly">
                        {{profileData[e.name]}}
                      </template>
                      <template v-else>
                        <a-input
                          v-decorator="[
                            e.name,
                            {rules: [{ required: e.required, message: `Please input your ${labelify(e.name).toLowerCase()}!` }]}
                          ]"
                          v-bind:class="e.name"
                        />
                      </template>
                    </template>
                    <template v-else-if="e.type==='image'">
                      <a-upload
                        v-decorator="[e.name, {
                          valuePropName: 'fileList',
                          getValueFromEvent: uploadFile,
                        }]"
                        name="e.name"
                        action=""
                        listType="picture"
                      >
                        <a-button>
                          <a-icon type="cloud-upload-o" /> Upload
                        </a-button>
                      </a-upload>
                    </template>
                    <template v-else-if="e.type==='select'">
                      <a-select
                        v-decorator="[
                          e.name,
                          {rules: [{ required: e.required, message: `Please input your ${labelify(e.name).toLowerCase()}!` }]}
                        ]"
                        placeholder='Please select'
                      >
                        <a-select-option v-for="opt in e.options" :key="opt">{{opt}}</a-select-option>
                      </a-select>
                    </template>
                    <template v-else-if="e.type==='radio'">
                      <a-radio-group v-decorator="[e.name]">
                        <a-radio v-for="opt in e.options" :key="opt" v-bind:value="opt">{{opt}}</a-radio>
                      </a-radio-group>
                    </template>
                    <template v-else>
                      <a-input
                        v-decorator="[
                          e.name,
                          {rules: [{ required: e.required, message: `Please input your ${e.name}!` }]}
                        ]"
                      />
                    </template>
                    <!-- end of field -->

                  </a-form-item>
                </a-form>

              </div>
            </div>
          </a-col>

          <!-- anchor -->
          <a-col :span="4">
            <a-anchor>
              <a-anchor-link v-for="section in sections" :key="section.title" href="#+section.title" v-bind:title="section.title" />
            </a-anchor>
          </a-col>
        </a-row>
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

const links = ['Profile', 'Change email', 'Change password', 'Login account']

const countries = ['Malaysia', 'USA']
const states = ['Perlis', 'Kedah']

const currencies = ['Ringgit Malaysia', 'US Dollar']
const timezones = ['(GMT+8:00) Kuala Lumpur']
const dateFormats = ['DD/MM/YY']
const timeFormats = ['24 hours (1430)']
const unitSystems = ['Metric (km, cm, kg, km/h)']

const sections = [
  {
    title: 'Profile',
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
    ],
  },
  {
    title: 'Format and measurement',
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
    fields: [
      {name:'theme',type:'select',options:['light','dark']},
      {name:'primaryColor', type:'color'},
      {name:'secondaryColor', type:'color'},
      {name:'systemLogo', type:'radio',options: ['Use default', 'Use company logo and icon']},
    ]
  },
]

const profileData = {
  email: 'munzirstudio@gmail.com',
  phone: '+60189188655',
  fullName: 'Munzir Madhadzir',
}

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
    Object.keys(profileData).forEach(e=>{
      this.form.getFieldDecorator(e,{initialValue:profileData[e]})
    })
  },
  created() {

  },
  data: function() {
    return {
      formLayout: 'horizontal',
      links,
      sections,
      profileData,
    }
  },
  methods: {
    info(n) {
      this.$message.info(n||'test')
    },
    labelify(s) {
      if (typeof(s)==='object'&&s!==null) {
        return labelify(s.name)
      }
      if (typeof(s)==='string'&&s.length>0) {
        return Util.uncamel(s)
      }
      return ''
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$message.info(`Received values of form: ${JSON.stringify(values)}`)
        }
      })
    },
    handleSelectChange (value) {
      this.$message.info(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      })
    },
    uploadFile(e) {
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    },
  },
  computed: {
    marks: function() {
      if (Array.isArray(this.sections)) {
        const marks = {}
        let i=0
        this.sections.forEach(e=>{
          marks[i] = e.title
          i++
        })
        return marks
      }
      return {}
    },
  },
}
</script>

<style>
.container {
  background: #ECECEC;
  padding: 30px;
}
.ant-form-item-label label:after {
  content: "";
}
.main-container {
  padding: 0 64px 64px 64px;
  min-height: 500px;
  overflow: hidden;
  border-left: 1px solid #ebedf0;
  margin-left: -1px;
}
.ant-form-item-required:after {
  display: inline-block;
  margin-right: 4px;
  content: "*";
  font-family: SimSun;
  line-height: 1;
  font-size: 14px;
  color: #f5222d;
}
.ant-form-item-control-wrapper {
  width: 75%;
}
.postalCode {
  width: 40%;
}
</style>

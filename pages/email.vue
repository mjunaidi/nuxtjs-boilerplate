<template>
  <div id="app" class="container">
    <h2>{{title}}</h2>

    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        v-for="e in fields"
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
</template>

<script>
import * as Util from '~/plugins/Util'
import profileData from '~/static/profile-data.json'

const fields = [
  {name:'email',type:'text'}
]

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
    Object.keys(profileData).forEach(e=>{
      this.form.getFieldDecorator(e,{initialValue:profileData[e]})
    })
  },
  created() {

  },
  data() {
    return {
      title: 'Change email',
      fields,
      profileData,
    }
  },
  methods: {
    info(n) {
      this.$message.info(n||'test')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$message.info(`Received values of form: ${JSON.stringify(values)}`)
        }
      })
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
  }
}
</script>

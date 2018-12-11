<template>
  <div>
    <h2>{{props.title}}</h2>

    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        v-for="e in props.fields"
        :key="e.name"
        v-bind:label="labelify(e.name)"
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        class="mb-3"
      >
        <!-- field -->
        <template v-if="e.type==='text'">
          <template v-if="e.readOnly">
            <div>
              <span>{{props.data[e.name]}}</span>
              <a class="float-right">{{e.link.label}}</a>
            </div>
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
        <template v-else-if="e.type==='password'">
          <a-input
            v-decorator="[
              e.name,
              {rules: [{ required: e.required, message: `Please input your ${labelify(e.name).toLowerCase()}!` }]}
            ]"
            type="password"
            v-bind:class="e.name"
          />
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

export default {
  props: ['props'],
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  created() {
    const {props} = this
    if (typeof(props)==='object'&&props!==null) {
      const {data} = props
      if (typeof(data)==='object'&&data!==null) {
        Object.keys(data).forEach(e=>{
          this.form.getFieldDecorator(e,{initialValue:data[e]})
        })
      }
    }
  },
  methods: {
    info(n) {
      this.$message.info(n||'test')
    },
    labelify(s) {
      return Util.labelify(s)
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$message.info(`Received values of form: ${JSON.stringify(values)}`)
        }
      })
    },
    handleSelectChange(value) {
      this.$message.info(value)
    },
    uploadFile(e) {
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    },
  }
}
</script>

<style>
.ant-form-item-label label:after {
  content: "";
}
.ant-form-item-control-wrapper {
  width: 66%;
}
.postalCode {
  width: 40%;
}
</style>

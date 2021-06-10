import { defineAsyncComponent } from 'vue'

const InputText = defineAsyncComponent(
  () => import(/* webpackChunkName: 'InputText' */ 'primevue/inputtext'),
)

export const inputTextComponents = {
  InputText,
}

export const inputTextProps = {
  inputLabel: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
}

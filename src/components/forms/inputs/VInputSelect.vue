<template>
  <div :class="wrapperClass">
    <span class="p-float-label">
      <dropdown
        v-bind="$attrs"
        :options="options"
        option-label="name"
        option-value="value"
        class="input-field wi-rounded-xl p-inputwrapper-focus"
      />
      <label class="label">{{ inputLabel }}</label>
    </span>
  </div>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent } from 'vue'

  const Dropdown = defineAsyncComponent(
    () => import(/* webpackChunkName */ 'primevue/dropdown'),
  )

  export default defineComponent({
    name: 'Vinputselect',
    components: {
      Dropdown,
    },
    inheritAttrs: false,
    props: {
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
      options: {
        type: Array,
        required: true,
      },
    },
  })
</script>
<style scoped>
  label ~ label {
    color: #32344a;
  }
  .p-float-label .p-inputwrapper-focus ~ label {
    color: #32344a;
  }
</style>

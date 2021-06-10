<template>
  <slot name="title" />
  <div
    v-for="option of options"
    :key="option.key"
    class="p-field-radiobutton wi-flex wi-flex-row wi-content-center"
  >
    <radio-button
      :id="option.key"
      :name="option.name"
      :value="option.value"
      v-bind="$attrs"
      :disabled="option.disabled"
      style="margin: 0"
    />
    <label class="wi-ml-2" :for="option.key">{{ option.name }}</label>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Option } from '@/types'
  import RadioButton from 'primevue/radiobutton'

  export default defineComponent({
    name: 'Vinputradio',
    components: {
      RadioButton,
    },
    props: {
      options: {
        type: Array as PropType<Option[]>,
        required: true,
      },
    },
  })
</script>

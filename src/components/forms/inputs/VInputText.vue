<template>
  <div :class="wrapperClass">
    <span class="p-float-label">
      <input-text
        :id="id"
        v-model="v$.text.$model"
        type="text"
        v-bind="$attrs"
        class="wi-rounded-xl input-field"
      />
      <label>{{ inputLabel }}</label>
    </span>
    <small class="p-error wi-block wi-min-h-6">
      <span v-if="v$.text.$dirty && v$.text.$invalid">
        {{ v$.text.$errors[0].$message }}
      </span>
    </small>
  </div>
</template>

<script lang="ts">
  import { computed, defineAsyncComponent, defineComponent } from 'vue'
  import { requiredIf, helpers } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  const InputText = defineAsyncComponent(
    () => import(/* webpackChunkName: 'VInputText' */ 'primevue/inputtext'),
  )

  export default defineComponent({
    name: 'VueTemplateVinputtext',
    components: {
      InputText,
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
      required: {
        type: Boolean,
        default: false,
      },
      modelValue: {
        type: String,
        required: true,
      },
      onErrorMessage: {
        type: String,
        default: 'Este campo no puede estar vacio',
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const text = computed<string>({
        get() {
          return props.modelValue
        },
        set(value) {
          emit('update:modelValue', value)
        },
      })

      const rules = {
        text: {
          required: helpers.withMessage(
            props.onErrorMessage,
            requiredIf(() => {
              return props.required
            }),
          ),
        },
      }

      const v$ = useVuelidate(rules, { text })

      return {
        text,
        v$,
      }
    },
  })
</script>
<style scoped>
  /* Styles to hide/show the placeholder on input focus */
  /* Chrome/Opera/Safari */
  .input-field::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  /* Firefox 19+ */
  .input-field::-moz-placeholder {
    opacity: 0;
    transition: inherit;
  }

  .input-field:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  .input-field:not(:placeholder-shown) + label,
  .input-field:focus + label {
    font-weight: 200;
    cursor: pointer;
  }
  .input-field {
    height: 45px;
  }
</style>

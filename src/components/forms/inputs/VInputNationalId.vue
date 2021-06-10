<template>
  <div :class="wrapperClass">
    <span class="p-float-label">
      <input-text
        v-model="v$.formattedRut.$model"
        type="text"
        v-bind="$attrs"
        class="wi-rounded-xl input-field"
        maxlength="12"
      />
      <label>{{ inputLabel }}</label>
    </span>
    <small class="p-error wi-ml-2 wi-block wi-h-3">
      <span v-if="v$.formattedRut.$dirty && v$.formattedRut.$invalid">
        {{ v$.formattedRut.$errors[0].$message }}
      </span>
    </small>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  import { useNationalIdValidations } from '@/composables/validations'

  import { inputTextComponents, inputTextProps } from './useInputTextSetup'
  import { requiredIf, helpers } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  export default defineComponent({
    name: 'VinputNationalId',
    components: {
      ...inputTextComponents,
    },
    inheritAttrs: false,
    props: {
      ...inputTextProps,
      modelValue: {
        type: String,
        required: true,
      },
      rutRequired: {
        type: Boolean,
        default: false,
      },
      validateRut: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const {
        useFormatNationalId,
        useGetNationalIdWithoutDotsAndDash,
        useNationalIdValidation,
      } = useNationalIdValidations()
      const rutIsValid = computed(() => {
        return useNationalIdValidation(props.modelValue)
      })

      const formattedRut = computed<string>({
        get() {
          return useFormatNationalId(props.modelValue)
        },
        set(value: string) {
          emit('update:modelValue', useGetNationalIdWithoutDotsAndDash(value))
        },
      })

      const rules = {
        formattedRut: {
          required: helpers.withMessage(
            'El rut es requerido',
            requiredIf(() => {
              return props.rutRequired
            }),
          ),
          rutIsValidRule: helpers.withMessage(
            'El rut ingresado no es válido',
            () => rutIsValid.value,
          ),
        },
      }
      const v$ = useVuelidate(rules, { formattedRut })

      return {
        rutIsValid,
        formattedRut,
        v$,
      }
    },
  })
</script>

<style scoped>
  @import './inputText.css';
</style>

<template>
  <div class="wi-container wi-p-10">
    <div
      class="wi-flex wi-flex-col wi-mx-auto wi-max-w-3xl wi-border wi-rounded-xl wi-p-20"
    >
      <img
        class="wi-mx-auto wi-mb-10"
        alt="Vue logo"
        src="@/assets/logo.png"
        width="200"
      />
      <div class="wi-flex">
        <v-input-text
          id="nombre"
          v-model="name"
          wrapper-class="wi-m-2"
          class="wi-w-56"
          placeholder="Pepito"
          input-label="Nombre"
        />

        <v-input-text
          id="apellidos"
          v-model="lastname"
          wrapper-class="wi-m-2"
          class="wi-w-56"
          placeholder="Perez"
          input-label="Apellidos"
        />
      </div>
      <v-input-text
        id="rut"
        v-model="rut"
        wrapper-class="wi-m-2"
        class="wi-w-56"
        placeholder="27.345.345-5"
        input-label="Rut"
      />
      <v-input-text
        id="credit-card"
        v-model="creditCard"
        wrapper-class="wi-m-2"
        class="wi-w-56"
        placeholder="1234 5678 2344 2345"
        input-label="Tarjeta de crédito"
      />

      <v-input-select
        id="city"
        v-model="selectedCity"
        :options="options"
        wrapper-class="wi-m-2"
        class="wi-w-62"
        input-label="Ciudad"
      />
      <v-input-radio id="city" v-model="selectedCity" :options="optionsRadio" />
      <v-input-rut
        id="rut-validation"
        v-model="rut"
        wrapper-class="wi-m-2"
        class="wi-w-56"
        placeholder="27.123.123-k"
        input-label="Rut"
        rut-required
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, defineAsyncComponent, ref } from 'vue'
  import { Option } from '@/types'

  const VInputText = defineAsyncComponent(
    () =>
      import(
        /* webpackChunkName: 'VInputText' */ '@/components/forms/inputs/VInputText.vue'
      ),
  )

  const VInputSelect = defineAsyncComponent(
    () =>
      import(
        /* webpackChunkName: 'VInputSelect' */ '@/components/forms/inputs/VInputSelect.vue'
      ),
  )

  const VInputRadio = defineAsyncComponent(
    () =>
      import(
        /* webpackChunkName: 'VInputRadio' */ '@/components/forms/inputs/VInputRadio.vue'
      ),
  )

  const VInputRut = defineAsyncComponent(
    () =>
      import(
        /* webpackChunkName: 'VInputRun' */ '@/components/forms/inputs/VInputRut.vue'
      ),
  )

  export default defineComponent({
    name: 'HelloWorld',
    components: {
      VInputSelect,
      VInputText,
      VInputRadio,
      VInputRut,
    },
    setup() {
      const name = ref('')
      const lastname = ref('')
      const rut = ref('')
      const creditCard = ref('')
      const selectedCity = ref('')
      const options = ref([
        {
          name: 'Selecciona una ciudad',
          value: 'none',
          placeholder: true,
        },
      ])

      const optionsRadio = ref<Option[]>([
        {
          name: 'Selecciona una ciudad',
          value: 'none',
          key: '1',
          disabled: false,
        },
      ])
      return {
        options,
        optionsRadio,
        name,
        lastname,
        rut,
        creditCard,
        selectedCity,
      }
    },
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

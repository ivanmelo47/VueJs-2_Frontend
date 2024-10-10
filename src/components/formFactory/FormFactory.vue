<template>
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div class="row g-0 auth-row w-100">
      <div class="col-lg-6 d-none d-lg-block">
        <div class="auth-cover-wrapper bg-primary-100">
          <div class="auth-cover">
            <div class="title text-center">
              <h1 class="text-primary mb-10">Bienvenido de Nuevo!</h1>
              <p class="text-medium">Inicia sesión en tu cuenta para continuar</p>
            </div>
            <div class="cover-image">
              <img src="assets/images/auth/signin-image.svg" alt="" />
            </div>
            <div class="shape-image">
              <img src="assets/images/auth/shape.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-flex align-items-center justify-content-center">
        <div class="signin-wrapper">
          <div class="form-wrapper">
            <h6 class="mb-15">{{ formTitle }}</h6>
            <p class="text-sm mb-25">
              Nos centramos en crear la mejor experiencia para ti.
            </p>
            <form @submit.prevent="handleSubmit">
              <div class="row">
                <div v-for="(input, index) in inputs" :key="index" class="col-12">
                  <div class="input-style-1">
                    <label>{{ input.label }}</label>
                    <input
                      :type="input.type"
                      v-model="input.value"
                      :placeholder="input.placeholder"
                      :required="input.required"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="button-group d-flex justify-content-center flex-wrap">
                    <button
                      type="submit"
                      class="main-btn primary-btn btn-hover w-100 text-center"
                    >
                      {{ submitButtonText }}
                    </button>
                  </div>
                </div>
                <p v-if="error" class="error">{{ error }}</p>
              </div>
            </form>
            <div class="singin-option pt-40">
              <p class="text-sm text-medium text-dark text-center">
                ¿Aún no tienes una cuenta? <a href="signup.html">Regístrate</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String,
      required: true,
    },
    inputs: {
      type: Array,
      required: true,
    },
    submitButtonText: {
      type: String,
      default: 'Enviar',
    },
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    handleSubmit() {
      this.error = null; // Reset error before submission

      // Crear un objeto con los valores de los inputs
      const inputValues = this.inputs.reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
      }, {});

      this.$emit('submit', inputValues);
    },
  },
};
</script>

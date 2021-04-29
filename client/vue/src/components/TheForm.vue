<template>
  <div class="text-xl font-medium">
    {{ title }}
  </div>
  <div>
    <form @submit="onSubmit">
      <div class="p-field flex flex-col">
        <label class="pb-1">Username</label>
        <PInputText
          type="username"
          v-model="email"
          aria-describedby="username2-help"
          :class="{ 'p-invalid': !!errors.email }"
        />
        <small class="p-error pt-1 h-7">{{ errors.email }}</small>
      </div>
      <div>
        <input class="btn-indigo rounded-lg" type="submit" />
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useField, useForm } from 'vee-validate';
export default defineComponent({
  setup() {
    const schema = {
      email: 'required|email',
      password: 'required|min:8'
    };
    const { errors, handleSubmit } = useForm({
      validationSchema: schema
    });

    const { value: email } = useField('email', undefined, {});

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });
    return {
      title: 'Formulario',
      onSubmit,
      email,
      errors
    };
  }
});
</script>

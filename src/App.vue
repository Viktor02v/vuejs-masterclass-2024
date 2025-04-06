<script setup lang="ts">
import { set } from '@vueuse/core'

const MocComponent = defineComponent(async () => {
  const greeting = ref('Hello')

  await new Promise((resolve) => {
    greeting.value = 'Hello from the Database'
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
  return () => h('p', greeting.value)
})
</script>

<template>
  <AuthLayout>
    <Suspense>
      <MocComponent />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
    <!-- <RouterView /> -->
  </AuthLayout>
</template>

<style scoped></style>

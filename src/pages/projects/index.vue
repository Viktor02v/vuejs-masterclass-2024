<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

// interface Project {
//   id:number
//   name :string
//   slug:string
//   createdAt:string
//   status:string
//   collaborators: number
// }

const projects = ref<any>()
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data

  console.log(projects.value)
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
    {{ projects }}
  </div>
</template>

<style scoped></style>

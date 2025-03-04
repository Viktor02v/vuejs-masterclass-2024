<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data

  console.log(projects.value)
})()
</script>

<template>
  <div>
    <h1 class="">Projects Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
    {{ projects ? projects[0] : '' }}

    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select()

  if(error) console.log(error)

  console.log(`Projects:`,data)
}


</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/projects">Go to Projects</RouterLink>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'
import type { ColumnDef, Table } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'

const projects = ref<Tables<'projects'>[] | null>(null)

usePageStore().pageData.title = 'Projects'

// Function to fetch projects from Supabase immediatelly
const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data

  console.log(projects.value)
}

await getProjects()

const columns: ColumnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left font-medium hover:bg-muted w-full block',
        },
        () => row.getValue('name'),
      )
    },
  },

  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    },
  },

  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        JSON.stringify(row.getValue('collaborators')),
      )
    },
  },
]
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style scoped></style>

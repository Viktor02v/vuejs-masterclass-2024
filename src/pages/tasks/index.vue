<script setup lang="ts">
import { h } from 'vue'
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'
import DataTable from '@/components/data-table/DataTable.vue';
import type { ColumnDef } from '@tanstack/vue-table';
// import type { ColumnDef } from '@tanstack/vue-table';

const tasks = ref<Tables<'tasks'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  tasks.value = data

  console.log(tasks.value)
})()

interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

 const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
]

 const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  }
]
</script>

<template>
  <DataTable :columns="columns" :data="payments"/>
</template>

<style scoped></style>

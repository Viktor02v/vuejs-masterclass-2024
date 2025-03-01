import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://adhvzazqdxgavjwwrygp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkaHZ6YXpxZHhnYXZqd3dyeWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4NzA4MDUsImV4cCI6MjA1NjQ0NjgwNX0.nMWjZHTebWE0Rl_ihH93Y07XNaDLW7aU4io4kVSm9QU'
)

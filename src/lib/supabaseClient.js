import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cwjnqynonaddkacwyxxc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3am5xeW5vbmFkZGthY3d5eHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NDgyMjYsImV4cCI6MjA2NzIyNDIyNn0.INwhzhI4L-rmOT81zRQ2N0TbHXWtH0G8VNLh1o5FAHw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

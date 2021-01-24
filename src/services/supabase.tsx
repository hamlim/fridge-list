import { createClient } from '@supabase/supabase-js'

let supabaseUrl = 'https://gmqtbjvmdnenmbnlckwr.supabase.co'
let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
let supabase = createClient(supabaseUrl, supabaseKey)

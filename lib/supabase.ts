
import { createClient } from '@supabase/supabase-js';

// ⚠️ REPLACE THESE WITH YOUR PROJECT DETAILS FROM SUPABASE DASHBOARD ⚠️
const supabaseUrl = 'https://xgrgdwkxqygkimilcsuk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhncmdkd2t4cXlna2ltaWxjc3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MzQyMzAsImV4cCI6MjA3OTIxMDIzMH0.3kGhE0uX-K3vPEQxbhp_1AkvADsEfwdIWHJooX6KKz0';
const supabaseServiceRole ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhncmdkd2t4cXlna2ltaWxjc3VrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzYzNDIzMCwiZXhwIjoyMDc5MjEwMjMwfQ._f8pmpun0lqU6htN9PhW6h-fNMY3lfJUZTGBZAw0eMk';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

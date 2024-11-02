// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bjlitydfbneliswbxism.supabase.co'; // Update with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqbGl0eWRmYm5lbGlzd2J4aXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MjgxNDgsImV4cCI6MjA0MjMwNDE0OH0.tmiNi600lReYH0A-OIrUjbyuMODfVk-VADt_qd-VeLo'; // Update with your Supabase Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kazhgikynfuvfrsibowo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthemhnaWt5bmZ1dmZyc2lib3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MDAyMTEsImV4cCI6MjA1NTk3NjIxMX0.ri-qm-oRT8V97WtWpXNdt2WQq4qky1QfZuGEx2iBnr0';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


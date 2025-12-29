import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // We are hardcoding these to ensure Vercel sees them
  const supabaseUrl = 'https://nskvwjgxebybvryzafde.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5za3Z3amd4ZWJ5bXZyeXphZmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwMTkzNzYsImV4cCI6MjA4MjU5NTM3Nn0.JN2i7kGzIcSLpBTJpTR_kdHW2AdaWxbPjBD1S8kSvDs';

  return createBrowserClient(supabaseUrl, supabaseKey);
}

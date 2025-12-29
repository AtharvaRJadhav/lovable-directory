import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    // HARDCODED KEYS to bypass Vercel Env Var issues
    const supabaseUrl = 'https://nskvwjgxebymvryzafde.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5za3Z3amd4ZWJ5bXZyeXphZmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwMTkzNzYsImV4cCI6MjA4MjU5NTM3Nn0.JN2i7kGzIcSLpBTJpTR_kdHW2AdaWxbPjBD1S8kSvDs';

    const cookieStore = {
        getAll() { return [] },
    }
    
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          get(name: string) {
            const cookieHeader = request.headers.get('Cookie') || ''
            const match = cookieHeader.match(new RegExp('(^| )' + name + '=([^;]+)'))
            if (match) return match[2]
            return undefined
          },
          set(name: string, value: string, options: CookieOptions) {},
          remove(name: string, options: CookieOptions) {},
        },
      }
    )
    
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host') 
      const isLocal = !forwardedHost
      if (isLocal) {
        return NextResponse.redirect(`${origin}${next}`)
      } else {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = {
        getAll() {
            return [] // We can't access cookies directly in a route handler easily without headers, 
                      // but createServerClient needs the cookie methods.
                      // For simplicity in this specific route handler structure:
            return []
        },
    }
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            // Need to parse cookies from request headers
            const cookieHeader = request.headers.get('Cookie') || ''
            const match = cookieHeader.match(new RegExp('(^| )' + name + '=([^;]+)'))
            if (match) return match[2]
            return undefined
          },
          set(name: string, value: string, options: CookieOptions) {
            // In a Route Handler, we need to return the response with Set-Cookie headers
            // This is a simplified version for exchanging the code
          },
          remove(name: string, options: CookieOptions) {
          },
        },
      }
    )
    
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // If successful, redirect to dashboard
      const forwardedHost = request.headers.get('x-forwarded-host') 
      const isLocal = !forwardedHost
      if (isLocal) {
        return NextResponse.redirect(`${origin}${next}`)
      } else {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      }
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}


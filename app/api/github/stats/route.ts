import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://api.github.com/users/krishnagopal596', {
      // Avoid caching to show fresh values when user refreshes
      cache: 'no-store',
      headers: {
        'Accept': 'application/vnd.github+json',
      },
    })
    if (!res.ok) {
      return NextResponse.json({ followers: null }, { status: res.status })
    }
    const data = await res.json()
    return NextResponse.json({ followers: data.followers ?? null })
  } catch (e) {
    return NextResponse.json({ followers: null }, { status: 500 })
  }
}


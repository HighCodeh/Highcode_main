import { NextResponse } from "next/server"

// Revalidate cache every 5 minutes
export const revalidate = 300

const INVITE_CODE = "highcode"
const FALLBACK = { memberCount: 2913, presenceCount: 0 }

export async function GET() {
  try {
    const res = await fetch(
      `https://discord.com/api/v10/invites/${INVITE_CODE}?with_counts=true&with_expiration=true`,
      { next: { revalidate } }
    )

    if (!res.ok) {
      return NextResponse.json(FALLBACK, {
        headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
      })
    }

    const data = await res.json()
    const memberCount: number =
      typeof data?.approximate_member_count === "number"
        ? data.approximate_member_count
        : FALLBACK.memberCount
    const presenceCount: number =
      typeof data?.approximate_presence_count === "number"
        ? data.approximate_presence_count
        : FALLBACK.presenceCount

    return NextResponse.json(
      { memberCount, presenceCount },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    )
  } catch {
    return NextResponse.json(FALLBACK, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    })
  }
}

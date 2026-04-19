"use client"

import { useEffect, useState } from "react"

type DiscordStats = {
  memberCount: number
  presenceCount: number
}

const FALLBACK: DiscordStats = { memberCount: 2913, presenceCount: 0 }

export function useDiscordStats(): DiscordStats {
  const [stats, setStats] = useState<DiscordStats>(FALLBACK)

  useEffect(() => {
    let aborted = false
    fetch("/api/discord", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (aborted || !data) return
        if (typeof data.memberCount === "number") {
          setStats({
            memberCount: data.memberCount,
            presenceCount:
              typeof data.presenceCount === "number" ? data.presenceCount : 0,
          })
        }
      })
      .catch(() => {})
    return () => {
      aborted = true
    }
  }, [])

  return stats
}

export function formatCompact(n: number): string {
  if (n >= 1000) {
    const value = n / 1000
    return value >= 10 ? `${Math.round(value)}K` : `${value.toFixed(1)}K`
  }
  return n.toString()
}

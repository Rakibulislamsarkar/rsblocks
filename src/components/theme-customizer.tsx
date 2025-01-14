"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useConfig } from "@/hooks/use-config"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import "@/styles/mdx.css"
import Link from "next/link"

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { resolvedTheme: mode } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="sm" className="md:hidden">
            <Link href="https://ui.shadcn.com/themes">shadcn themes</Link>
          </Button>
        </DrawerTrigger>
      </Drawer>
      <div className="hidden items-center md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm">
                <Link href="https://ui.shadcn.com/themes">shadcn themes</Link>
            </Button>
          </PopoverTrigger>
        </Popover>
      </div>
    </div>
  )
}

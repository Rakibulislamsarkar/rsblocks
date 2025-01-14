"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover"

import "@/styles/mdx.css"
import Link from "next/link"

export function ThemeCustomizer() {
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

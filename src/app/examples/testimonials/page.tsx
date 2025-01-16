import { Metadata } from "next"
import { TestimonialsClient } from "@/app/examples/testimonials/components/testimonials-client"

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Testimonials built using the components.",
}

export default function TestimonialsPage() {
  return <TestimonialsClient />
}


import { Metadata } from "next"
import { TestimonialsClient } from "@/app/examples/testimonials/components/testimonials-client"
import FeaturePage from "./components/feature1"

export const metadata: Metadata = {
  title: "Features",
  description: "Update your Features",
}

export default function TestimonialsPage() {
  return <FeaturePage />
}


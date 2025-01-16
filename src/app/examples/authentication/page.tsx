import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/examples/authentication/components/user-auth-form";
import { StarIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10" />

      <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Switch between Login/Register */}
        <div className="absolute right-4 top-4 md:right-8 md:top-8">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="font-normal">
              New User?
            </Badge>
            <Link
              href="/examples/authentication"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              Login
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="rounded-lg bg-primary/10 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Slide Inc
              </h1>
              <p className="text-sm text-muted-foreground">
                Create an account to get started
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Start your journey
                </span>
              </div>
            </div>
            <div className="backdrop-blur-[2px] rounded-xl border bg-background/60 p-6 shadow-lg">
              <UserAuthForm />
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="relative hidden h-full flex-col justify-between overflow-hidden p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium gap-5">
            <div className="rounded-lg bg-primary/10 p-2">
              <svg
                xmlns="http://www.w3.org/3000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            </div>
            Slide Inc
          </div>
          <div className="relative z-20 mt-auto">
            <div className="space-y-8">
              {/* Social Proof */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="font-medium">
                  Rated 4.9/5 from over 1,000+ reviews
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="space-y-6">
                <p className="text-lg leading-relaxed">
                  &ldquo;This platform has revolutionized how we handle our
                  workflow. The intuitive interface and powerful features have
                  made it an essential part of our daily operations. Highly
                  recommended for any business looking to scale.&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <Image
                    src="/01.png"
                    width={40}
                    height={40}
                    alt="Sofia Davis"
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Sofia Davis</div>
                    <div className="text-sm opacity-60">
                      Product Designer, Dropbox
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

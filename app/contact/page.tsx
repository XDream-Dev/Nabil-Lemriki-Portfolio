import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/navigation";
import { Twitter, Linkedin, Dribbble, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300 bg-dotted">
        {/* Breadcrumb */}
        <div className="absolute top-8 left-4 z-40">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link
              href="/"
              className="hover:text-gray-800 dark:hover:text-gray-200"
            >
              Home
            </Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 w-full">
          {/* Services Section (clean, compact) */}

          <div className="w-full max-w-2xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                Let's Talk
              </h1>

              <div className="mb-8 space-y-4">
                <a
                  href="mailto:nabil.lemriki@gmail.com"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 block font-medium"
                >
                  nabil.lemriki@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/nabil-lemriki-588550205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block"
                >
                  linkedin.com/in/nabil-lemriki-588550205
                </a>

                <div className="flex justify-center gap-6 pt-4">
                  <a
                    href="#"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nabil-lemriki-588550205"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:nabil.lemriki@gmail.com"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Gmail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Dribbble"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Dribbble className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Your Name"
                  className="rounded-full h-14 px-6 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="rounded-full h-14 px-6 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="rounded-full h-14 px-6 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 md:col-span-2"
                />
              </div>
              <Textarea
                placeholder="Message"
                className="rounded-2xl min-h-[150px] p-6 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-400 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <Button className="w-full rounded-full h-14 text-lg bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors text-white dark:text-gray-900">
                Send
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

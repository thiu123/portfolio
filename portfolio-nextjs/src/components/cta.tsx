"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let's work together.
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. My inbox is always
            open.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8"
          >
            <Link href="mailto:buitrunghieu.dev@gmail.com">
              Say Hello
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

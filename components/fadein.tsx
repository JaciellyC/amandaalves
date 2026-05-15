"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
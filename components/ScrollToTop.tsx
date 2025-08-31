'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

interface ScrollToTopProps {
  isVisible: boolean
}

export default function ScrollToTop({ isVisible }: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

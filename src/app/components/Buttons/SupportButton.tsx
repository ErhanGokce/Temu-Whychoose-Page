import React from 'react'
import { MessageCircle } from '@geist-ui/icons'
function SupportButton() {
  return (
    <button
  className="flex items-center gap-2 border-2 border-gray-400 hover:border-gray-950 px-5 py-2 rounded-full transition-colors duration-200">
  <MessageCircle color='black' className="w-10 h-10" />
  <span className="text-base font-semibold text-gray-950">Destek merkezi</span>
</button>
  )
}

export default SupportButton
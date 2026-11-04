import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from './theme.js'
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill'
import App from './App.jsx'

// Windows/Chromium can't render flag emojis (shows "LK" instead of 🇱🇰).
// Loads a small flags-only font, self-hosted from public/fonts, only when needed.
polyfillCountryFlagEmojis('Twemoji Country Flags', '/fonts/TwemojiCountryFlags.woff2')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)

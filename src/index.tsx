import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from '@/components/App'
import { ThemeProvider } from '@/components/ThemeProvider'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <ThemeProvider defaultTheme="dark" storageKey="windstar-ui-theme">
    <App />
  </ThemeProvider>
)

export default App

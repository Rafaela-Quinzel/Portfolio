import 'aos/dist/aos.css'
import './styles/global.css'
import React from 'react'
import { AppRouterProvider } from 'routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App(): JSX.Element {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterProvider />
    </QueryClientProvider>
  )
}
export default App

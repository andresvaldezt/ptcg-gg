import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='flex flex-col min-h-screen text-amber-50 bg-gray-800'>
      <h1 className='text-center pt-4 text-3xl'>React/TS Supabase Auth & Context for PTCG-GG</h1>
      <RouterProvider router={router}/>
    </main>
  </StrictMode>,
)

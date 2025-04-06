import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from "./routes.tsx"
import './index.css'
import { RouterProvider } from 'react-router'
import SidebarProvider from './context/sidebar-context.tsx'
import AuthProvider from './context/auth-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SidebarProvider>
  </StrictMode>,
)

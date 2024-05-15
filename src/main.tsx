import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme.ts'
import RootPage from './pages/RootPage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import IndexPage from './pages/IndexPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import BlogsPage from './pages/BlogsPage.tsx'
import NotesPage from './pages/NotesPage.tsx'
import JobsPage from './pages/JobsPage.tsx'
import OffersPage from './pages/OffersPage.tsx'

const config = {
  aws_project_region: import.meta.env.aws_project_region,
  aws_content_delivery_bucket: import.meta.env.aws_content_delivery_bucket,
  aws_content_delivery_bucket_region: import.meta.env
    .aws_content_delivery_bucket_region,
  aws_content_delivery_url: import.meta.env.aws_content_delivery_url,
}

Amplify.configure(config)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}  element={<RootPage />  }>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />  } />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='blog' element={<BlogsPage />} />
        <Route path='note' element={<NotesPage />} />
        <Route path='job' element={<JobsPage />} />
        <Route path='offer' element={<OffersPage />} />
        <Route />
      </Route>
    </Route>
  )
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const config = {
  aws_project_region: import.meta.env.aws_project_region,
  aws_content_delivery_bucket: import.meta.env.aws_content_delivery_bucket,
  aws_content_delivery_bucket_region: import.meta.env
    .aws_content_delivery_bucket_region,
  aws_content_delivery_url: import.meta.env.aws_content_delivery_url,
}

Amplify.configure(config)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

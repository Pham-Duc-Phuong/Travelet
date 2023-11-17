import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from 'store'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <BrowserRouter >
    <ToastContainer />
    <ConfigProvider>
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <App />
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  </BrowserRouter>
  //</React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Leadership from './pages/about/Leadership.jsx'
import Departments from './pages/about/Departments.jsx'
import HonoraryStaff from './pages/about/HonoraryStaff.jsx'
import DocumentsAb from './pages/about/Documents.jsx'
import Vacancies from './pages/about/Vacancies.jsx'
import Documents from './pages/anti-corruption/Documents.jsx'
import Contacts from './pages/anti-corruption/Contacts.jsx'
import Youthnews from './pages/youth/News.jsx'
import YouthCenternews from './pages/youth/CenterNews.jsx'
import Youthdocuments from './pages/youth/Documents.jsx'
import SportCulture from './pages/youth/SportCulture.jsx'
import WomenNews from './pages/women/News.jsx'
import WomenReports from './pages/women/Reports.jsx'
import GenderEquality from './pages/women/GenderEquality.jsx'
import News from './pages/news/News.jsx'
import NewsPress from './pages/news/Press.jsx'
import NewsPlans from './pages/news/Plans.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "about/leadership",
        element: <Leadership />
      },
      {
        path: "about/departments",
        element: <Departments />
      },
      {
        path: "about/honorary-staff",
        element: <HonoraryStaff />
      },
      {
        path: "about/documents",
        element: <DocumentsAb />
      },
      {
        path: "about/vacancies",
        element: <Vacancies />
      },
      {
        path: "anti-corruption/documents",
        element: <Documents />
      },
      {
        path: "anti-corruption/contacts",
        element: <Contacts />
      },
      {
        path: "youth/news",
        element: <Youthnews />
      },
      {
        path: "youth/documents",
        element: <Youthdocuments />
      },
      {
        path: "youth/sport-culture",
        element: <SportCulture />
      },
      {
        path: "youth/center-news",
        element: <YouthCenternews />
      },
      {
        path: "women/news",
        element: <WomenNews />
      },
      {
        path: "women/gender-equality",
        element: <GenderEquality />
      },
      {
        path: "women/reports",
        element: <WomenReports />
      },
      {
        path: "news",
        element: <News />
      },
      {
        path: "news/press",
        element: <NewsPress />
      },
      {
        path: "news/Plans",
        element: <NewsPlans />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router} />
  </Provider>
)

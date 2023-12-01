import Header from './component/Header'
import Footer from './component/Footer'
import Filters from './component/Filters'
import Nav from './component/Nav'
import Headlines from './component/Headlines'
import ArticlePage from './component/ArticlePage'
import { useState, useEffect } from 'react'
import { fetchNews } from './lib/api'
// npm i jotai
import { Routes, Route } from 'react-router-dom'
import { atom, useAtom } from 'jotai'

export const _newsStore = atom([])

function App() {

  const [newsStore, setNewsStore] = useAtom(_newsStore)

  function showAll() {
    return ()=>true
  }

  const [headlines, setHeadlines] = useState([])
  const [country, setCountry] = useState({name: 'United States', code: 'us'})
  const [filter, setFilter] = useState(showAll)
  const [filteredHeadlines, setFilteredHeadlines] = useState([])

  async function renderNews() {
    const data = await fetchNews('/top-headlines', '?country='+country.code)
    // console.log(data)
    setHeadlines(data.articles)
    setFilteredHeadlines(data.articles)
  }

  useEffect(()=>{
    renderNews()
  },[country])

  useEffect(()=>{
    let filtered = headlines.filter(filter)
    setFilteredHeadlines([...filtered])
  },[filter])

  useEffect(()=>{
    // console.log('filtered: ', filteredHeadlines)
    setNewsStore(filteredHeadlines)
  },[filteredHeadlines])

  return (
    <>
      <Header />
      <div id="container">
        {/* <Nav /> */}
        <main>
          <Routes>
            <Route index element={<Headlines filter={filter} headlines={filteredHeadlines} country={country}/>} />
            <Route headlines={filteredHeadlines} path="/article/:index" element={<ArticlePage />}/>
          </Routes>
        </main>
        <Filters 
          setCountry={setCountry}
          setFilter={setFilter}
          />
      </div>
      <Footer />
    </>
  )
}

export default App

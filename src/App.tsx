import React, { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { getRoversPhotos } from './store/actions/actionRoverPhotos'
import { Header } from './components/Header'
import { SearchSelect } from './components/SearchSelect'
import Container from '@material-ui/core/Container'
import { ListPhoto } from './components/ListPhoto/ListPhoto'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRoversPhotos())
  }, [])
  return (
    <div className='App'>
      <Header />
      <Container maxWidth='md'>
        <SearchSelect />
        <ListPhoto />
      </Container>
    </div>
  )
}

export default App

import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getRoversPhotos } from './store/actions/actionRoverPhotos'
import { Header } from './components/Header'
import { SearchSelect } from './components/SearchSelect'
import Container from '@material-ui/core/Container'
import { ListPhoto } from './components/ListPhoto/ListPhoto'
import { RootState } from './store/rootReducer'
import { CustomAlert } from './components/CustomAlert'
import { actionApp } from './store/actions/actionApp'

function App() {
  const dispatch = useDispatch()
  const { open, message, type } = useSelector(
    (state: RootState) => state.appReducer.alert
  )

  useEffect(() => {
    dispatch(getRoversPhotos())
  }, [])
  return (
    <div className='App'>
      <Header />
      {open ? (
        <CustomAlert
          isOpenAlert={open}
          typeAlert={type}
          onCloseAlert={() => {
            dispatch(actionApp.closeAlert())
          }}>
          {message}
        </CustomAlert>
      ) : null}
      <Container maxWidth='md'>
        <SearchSelect />
        <ListPhoto />
      </Container>
    </div>
  )
}

export default App

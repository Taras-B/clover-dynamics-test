import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './store/rootReducer'
import { getRoversPhotos } from './store/actions/actionRoverPhotos'
import { actionApp } from './store/actions/actionApp'

import Container from '@material-ui/core/Container'

import { Header } from './components/Header'
import { CustomAlert } from './components/CustomAlert'
import { SearchSelect } from './components/SearchSelect'
import { ListPhoto } from './components/ListPhoto/ListPhoto'
import { LoadingState } from './store/types'

function App() {
  const dispatch = useDispatch()
  const { open, message, type } = useSelector(
    (state: RootState) => state.appReducer.alert
  )
  const loading = useSelector(
    (state: RootState) => state.appReducer.loading === LoadingState.LOADING
  )

  useEffect(() => {
    dispatch(getRoversPhotos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='App'>
      <Header loading={loading} />
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

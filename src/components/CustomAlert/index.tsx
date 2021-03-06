import React from 'react'
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import { AlertTypeMessageT } from '../../store/types'

type AlertProps = {
  typeAlert: AlertTypeMessageT
  isOpenAlert: boolean
  onCloseAlert: () => void
}

export const CustomAlert: React.FC<AlertProps> = ({
  onCloseAlert,
  typeAlert,
  isOpenAlert,
  children,
}) => {
  return (
    <div>
      <Snackbar
        open={isOpenAlert}
        onClose={onCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert variant='filled' severity={typeAlert} onClose={onCloseAlert}>
          {children}
        </Alert>
      </Snackbar>
    </div>
  )
}

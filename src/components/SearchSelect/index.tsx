import React from 'react'
import { useDispatch } from 'react-redux'
import { Control, Controller, useForm } from 'react-hook-form'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { EnumRovers, EnumCameraRover, IQueryingBySol } from '../../store/types'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { searchRoversPhotos } from '../../store/actions/actionRoverPhotos'

// type IFormDate = Omit<IQueryingBySol, 'page'>
type IFormDate = {
  sol: number
  rovers: string
  camera: string
}

export const SearchSelect = () => {
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm()

  const onSubmitForm = ({ camera, rovers, sol }: IFormDate) => {
    console.log('SUBMIT', rovers)
    dispatch(searchRoversPhotos(rovers.toLowerCase(), sol, camera.toLowerCase()))
  }
  return (
    <Grid container justify='center' spacing={4}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <HookFormSelect
              id='rovers-select'
              name='rovers'
              label='Choose rovers'
              control={control}>
              {Object.keys(EnumRovers).map((key, i) => (
                <MenuItem key={i} value={key}>
                  {key}
                </MenuItem>
              ))}
            </HookFormSelect>
          </Grid>
          <Grid item xs={12} md={4}>
            <HookFormSelect
              id='camera-select'
              name='camera'
              label='Choose camera'
              control={control}>
              {Object.keys(EnumCameraRover).map((key, i) => (
                <MenuItem key={i} value={key}>
                  {key}
                </MenuItem>
              ))}
            </HookFormSelect>
          </Grid>
          <Grid item xs={12} md={4}>
            <Controller
              as={TextField}
              name='sol'
              control={control}
              defaultValue=''
              fullWidth
              label='Sol'
              required={true}
              type='number'
            />
          </Grid>

          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary'>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

export interface IHookSelectProps {
  id: string
  name: string
  label: string
  control: Control
  defaultValue?: string
}

const HookFormSelect: React.FC<IHookSelectProps> = ({
  name,
  label,
  control,
  defaultValue = '',
  children,

  ...props
}) => {
  const labelId = `${name}-label`
  return (
    <FormControl style={{ minWidth: 170 }} {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={label}>
            {children}
          </Select>
        }
        name={name}
        control={control}
        defaultValue={defaultValue}
        variant='outlined'
        required={true}
      />
    </FormControl>
  )
}

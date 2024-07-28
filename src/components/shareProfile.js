import React from 'react'
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
import Button from '../components/atom/Button'

export default function shareProfile() {

  return (
    <div>
        <Button props={'btn-icon'}>
            <BroadcastOnPersonalIcon />
        </Button>
    </div>
  )
}

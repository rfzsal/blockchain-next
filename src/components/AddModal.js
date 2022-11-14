// ** React Imports
import * as React from 'react'

// ** MUI Imports
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}

export default function AddModal({ addData }) {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [hash, setHash] = React.useState('')
  const [name, setName] = React.useState('')

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    if (!loading) {
      setName('')
      setHash('')
    }

    setOpen(false)
  }

  const handleClick = async () => {
    setLoading(true)

    await addData(hash, name)

    setHash('')
    setName('')
    setLoading(false)
  }

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>
        Tambah Data
      </Button>

      <Modal
        aria-labelledby='transition-modal-title'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        keepMounted
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2' mb={2}>
              Tambah Data
            </Typography>

            <TextField
              fullWidth
              label='Hash IPFS'
              variant='outlined'
              placeholder='QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR'
              margin='dense'
              value={hash}
              onChange={e => setHash(e.target.value)}
              disabled={loading}
            />
            <TextField
              fullWidth
              label='Nama File'
              variant='outlined'
              placeholder='Contoh.txt'
              margin='dense'
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={loading}
            />

            <LoadingButton loading={loading} variant='contained' onClick={handleClick} sx={{ marginTop: 4 }}>
              Tambah Data
            </LoadingButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

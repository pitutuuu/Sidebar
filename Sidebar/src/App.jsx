import { useState } from 'react'
import { Button, TextField, Stack, Snackbar } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const App = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleSend = () => {
    setOpen(true)
    setDisabled(true)
  }

  const handleOnChange = (e) => {
    setMessage(e.target.value)
  }

  const handleClose = () => {
    setOpen(false)
    setMessage('')
    setDisabled(false)
  }

  const buttonDisabled = message === '' || open === true

  return (
    <>
      <Stack>
        <TextField
          disabled={disabled} label="Wiadomość"
          onChange={handleOnChange} value={message} />
        <Button
          endIcon={<SendIcon />} disabled={buttonDisabled}
          onClick={() => handleSend()}>
            Wyślij
        </Button>
      </Stack>
      <Snackbar
        open={open} onClose={handleClose}
        autoHideDuration={5000} message={message} />
    </>
  );
}

export default App;
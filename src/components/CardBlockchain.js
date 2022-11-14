// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const CardBlockchain = ({ id, hash, name }) => {
  return (
    <Card>
      <CardHeader title={id} />

      <CardContent>
        <Typography variant='body1'>File Hash:</Typography>
        <Typography variant='body2' noWrap>
          {hash}
        </Typography>

        <Typography variant='body1' mt={4}>
          File Name:
        </Typography>
        <Typography variant='body2'>{name}</Typography>
      </CardContent>

      <CardActions className='card-action-dense'>
        <Button>Open File</Button>
      </CardActions>
    </Card>
  )
}

export default CardBlockchain

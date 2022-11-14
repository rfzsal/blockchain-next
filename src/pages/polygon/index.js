// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Lib Imports
import PolygonContract from 'lib/PolygonContract'

// ** Components Imports
import AddModal from 'src/components/AddModal'
import CardBlockchain from 'src/components/CardBlockchain'

const Polygon = () => {
  const [contract, setContract] = useState(null)
  const [data, setData] = useState([])

  const getData = () => {
    fetch('/api/polygon/files')
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch(error => console.log(error))
  }

  const addData = async (hash, name) => {
    try {
      const res = await fetch('/api/polygon/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hash,
          name
        })
      })
      const data = await res.json()

      console.log('Tx Hash: ', data.data.hash)
      alert('Data berhasil ditambahkan')
      alert('Data akan muncul setelah Block berhasil dimining')
    } catch (error) {
      console.log('Error: ', error)
      alert('Gagal menambahkan data')
    }
  }

  useEffect(() => {
    setContract(PolygonContract.createReadOnly())
  }, [])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (contract) {
      contract.r.on('FileUploaded', () => {
        getData()
      })

      return () => contract.r.removeAllListeners()
    }
  }, [contract])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
          <Typography variant='h5'>Polygon</Typography>
          <AddModal addData={addData} />
        </Stack>
      </Grid>

      {data.length >= 0 &&
        data.map(file => {
          return (
            <Grid key={file.id} item xs={12} sm={6} md={4}>
              <CardBlockchain id={file.id} hash={file.hash} name={file.name} />
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Polygon

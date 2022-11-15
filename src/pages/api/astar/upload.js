import AstarContract from '../../../../lib/AstarContract'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })

    return
  }

  const contract = AstarContract.createReadWrite()

  const { hash, name } = req.body
  const data = await contract.rw.uploadFile(hash, name)

  res.status(200).send({ data })
}

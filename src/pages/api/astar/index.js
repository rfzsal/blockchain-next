import AstarContract from '../../../../lib/AstarContract'

export default async function handler(req, res) {
  try {
    const contract = AstarContract.createReadOnly()
    const data = await contract.r.name()

    res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

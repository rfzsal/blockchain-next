import PolygonContract from '../../../../lib/PolygonContract'

export default async function handler(req, res) {
  try {
    const contract = PolygonContract.createReadOnly()
    const data = await contract.r.name()

    res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

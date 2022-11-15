import AstarContract from '../../../../lib/AstarContract'

export default async function handler(req, res) {
  try {
    const contract = AstarContract.createReadOnly()
    const count = Number(await contract.r.fileCount())

    const files = []
    for (let i = count; i >= 1; i--) {
      const file = await contract.r.files(i)
      files.push({
        id: Number(file[0]),
        hash: file[1],
        name: file[2]
      })
    }

    res.status(200).send({ data: files })
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

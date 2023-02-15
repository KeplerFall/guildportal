// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    axios.get('https://gameinfo.albiononline.com/api/gameinfo/guilds/OrdO3-_dTXuzm5JaL-w2iQ').then(ret=>{
        console.log(ret.data)
        res.status(200).json({ name: 'John Doe' })
    })
}

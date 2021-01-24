// import airtable from 'airtable'
import type { NextApiRequest, NextApiResponse } from 'next'

import { createClient } from '@supabase/supabase-js'

// // @ts-ignore
// airtable.configure({
//   apiKey: process.env.AIRTABLE_KEY,
// })

// let base = airtable.base('appc7cbCj7JWXqfGS')

let supabaseUrl = 'https://gmqtbjvmdnenmbnlckwr.supabase.co'
let supabase = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let body = JSON.parse(req.body)

  let { issuerId } = body

  let record
  await base('users')
    .select()
    .eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      let userRecord = records.find((record) => {
        return record.get('issuerId') === issuerId
      })

      if (userRecord) {
        record = userRecord
        return
      }

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage()
    })

  console.log(record)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ success: true }))

  // base('page-hits')
  //   .create([
  //     {
  //       fields: {
  //         url: body.url,
  //         hit: 1,
  //       },
  //     },
  //   ])
  //   .catch((err) => {
  //     console.error(err)
  //   })

  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({ success: true }))
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   let body = JSON.parse(req.body)

//   let { issuerId } = body

//   let record
//   await base('users')
//     .select()
//     .eachPage(function page(records, fetchNextPage) {
//       // This function (`page`) will get called for each page of records.

//       let userRecord = records.find((record) => {
//         return record.get('issuerId') === issuerId
//       })

//       if (userRecord) {
//         record = userRecord
//         return
//       }

//       // To fetch the next page of records, call `fetchNextPage`.
//       // If there are more records, `page` will get called again.
//       // If there are no more records, `done` will get called.
//       fetchNextPage()
//     })

//   console.log(record)

//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ success: true }))

//   // base('page-hits')
//   //   .create([
//   //     {
//   //       fields: {
//   //         url: body.url,
//   //         hit: 1,
//   //       },
//   //     },
//   //   ])
//   //   .catch((err) => {
//   //     console.error(err)
//   //   })

//   // res.statusCode = 200
//   // res.setHeader('Content-Type', 'application/json')
//   // res.end(JSON.stringify({ success: true }))
// }

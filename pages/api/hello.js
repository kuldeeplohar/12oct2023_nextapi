// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  //obj.method().method({js object})
  res.status(200).json({ name:`hello ${req.query.name}`,
                         surname:` ${req.query.surname}`,
                         add:`${req.query.add}`,
                         mobile:`${req.query.mobile}`
})
}

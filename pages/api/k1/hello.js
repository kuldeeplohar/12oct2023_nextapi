//1 import


//2 defination area
export default function GET(req , res){
 res.status(200).json({
         name:`${req.query.name}`,
         surname:`${req.query.surname}`,
         add:`${req.query.add}`,
         contact:`${req.query.contact}`
    })
}

//3 export area
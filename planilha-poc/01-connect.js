const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc =  new GoogleSpreadsheet('1yvepE8Viqsa4l7ZGVC8ElWyMzsYaTvVf_kaeL7RGRcA')

const run = async() => {
  try{
 await doc.useServiceAccountAuth(credentials)
 await doc.loadInfo()
 console.log(doc.title)

}catch(err){
  console.log(err)
}
}
run()
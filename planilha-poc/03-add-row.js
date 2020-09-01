const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc =  new GoogleSpreadsheet('1yvepE8Viqsa4l7ZGVC8ElWyMzsYaTvVf_kaeL7RGRcA')

const run = async() => {
  try{
 await doc.useServiceAccountAuth(credentials)
 await doc.loadInfo()
 const sheet = doc.sheetsByIndex[1]
// Nome	Email	Whatsapp	Cupom	Promo
  await sheet.addRow({
    Nome: 'Lucas assunção',
    Email: 'lucas1795@gmail.com',
    Whatsapp: '2197455-8009',
    Cupom: 'aaa111',
    Promo: 'asdfsdd'
  })

}catch(err){
  console.log(err)
}
}
run()
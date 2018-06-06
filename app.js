'use strict'

const fs = require('fs')
const file = './participantes-temp.csv'

fs.readFile(file, 'utf8', (error, content) => {
  if (error) throw error

  const [, ...lines] = content.split('\n')

  const peopleData = lines.filter(Boolean).map((item) => {
    const [, email, name] = item.split(',')
    return {
      name,
      email: email.replace(/(.+)@(.+)/, (match, preArroba, posArroba) => {
        return preArroba.replace(/\w{3}$/g, '*') + '@' + posArroba.replace(/\w/g, '*')
      })
    }
  })

  const amountOfPeople = peopleData.length

  console.log(
    peopleData[Math.floor(Math.random() * amountOfPeople)]
  )
})



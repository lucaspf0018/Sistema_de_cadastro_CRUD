const express = require('express')
const app = express()
const cors = require('cors')

//midleware

app.use(express.json())

// rota de teste
app.get('/usuarios', function(req,res){
    res.json([

        {nome: 'Lucas', idade:31, },
        {nome:'Gizele', idade:24}

    ])
})

module.exports = app
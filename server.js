const express = require('express')
const app = express()
const PORT

const mopeds = {
    'puch': {
        'model': ['maxi', 'magnum', 'magnum-x', 'dart'],
        'yearsProduced': '1974 1986',
        'colors': ['yellow', 'apple-green', 'red', 'white' ],
        'manufacturedLocation': 'Graz, Austria'
    },
    'minarelli': {
        'model': [ 'Cimatti', 'Gitane', 'Testi', 'Concord', 'Motron', 'Fantic', 'General', 'AMF', 'Baretta', 'Gadabout', 'Motomarina', 'Safari'],
        'yearsProduced': '1969 to 1986',
        'colors': ['yellow', 'apple-green', 'red', 'white' ],
        'manufacturedLocation': 'Italy'
    },
    'unknown':{
        'model': 'unknown',
        'yearsProduced': 0,
        'colors': 'unknown',
        'manufacturedLocation': 'unknown'
}     
}  

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const mopedName = request.params.name.toLowerCase()
    if ( mopeds[mopedName] ){
        response.json( mopeds[mopedName])
    }else{
        response.json( mopeds['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

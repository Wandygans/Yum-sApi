const express = require('express')
var router = express.Router();
const hxz = require('hxz-api')
__path = process.cwd()
const fs = require('fs')
//module 
const { facebookdlv2, youtubedl, youtubedlv2, } = require("@bochilteam/scraper")
const { Spotify} = require("spotifydl-core")

//Spotify client
const spotify = new Spotify({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
})

router.get('/fb', async(req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await facebookdlv2(link)
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

module.export = router
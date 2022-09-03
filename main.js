__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
	res.sendFile(__path + '/public/index.html')
})
/**router.get('/css/style.css', async(req, res) => {
	res.sendFile(__path + '/views/css/style.css')
})**/


router.use(function (req, res) {
res.status(404)
.sendFile(__path + '/public/404.html')
});


module.exports = router

const newsRouter = require('./news');
const siteRouter = require('./site');

function routes(app) {
    //cau hinh 1 routes chứa các router con
    app.use('/news', newsRouter);
    app.use('/search', siteRouter);
    app.use('/', siteRouter);
    // app.get('/', (req, res) => {
    // return res.render('home');
    // })
    
    // app.get('/news', (req, res) => {
    // return res.render('news');
    // })
    
    // app.get('/search', (req, res) => {
    // return res.render('search');
    // })
    
    // app.post('/search', (req, res) => {
    // console.log(req.body)
    // return res.send('')
    // })


}
module.exports = routes;
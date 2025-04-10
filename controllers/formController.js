
exports.renderForm = (req, res) => {
    res.render('index', {status: null})
};

exports.handleForm = (req, res) => {
    const {username, email} = req.body;

    console.log('gelen veriler: ', req.body);

    if(!username && !email){
        /* // ajax toast mesajını göstermek için res.json şeklinde değiştirdik
        //res.render('index', {status: 'error'}); */

        res.json({status: 'error', message: 'Lütfen formu doldurun!'});
    }
    else{
        /* res.render('index', {status: 'success'}); */
        res.json({status: 'success', message: 'Form başarıyla gönderildi!'});
    }
};
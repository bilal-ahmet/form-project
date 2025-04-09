
exports.renderForm = (req, res) => {
    res.render('index', {status: null})
};

exports.handleForm = (req, res) => {
    const {username, email} = req.body;

    if(!username && !email){
        res.render('index', {status: 'success'});
    }
    else{
        res.render('index', {status: 'error'});
    }
};
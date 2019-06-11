module.exports = function(app){
    app.get('/', function(req, res){
        res.render("home/index"); //here I can hide the file extension, because ejs can understand it
    });
}; 
    
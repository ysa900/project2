const hello = (req,res)=>{
    res.render("home/index");
};

const login = (req,res)=> {
    res.render("home/login");
};


const movie = (req,res)=>{
    res.render("home/movie");
};

module.exports = {
    hello,
    login,
    movie,
};
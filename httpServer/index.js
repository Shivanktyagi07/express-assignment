const http = require ('http');

const mensProduct = [
    { id: 1, name: 'Men 1', category: 'clothing' },
    { id: 2, name: 'Men 2', category: 'kurta' },
    { id: 3, name: 'Men 3', category: 'clothing' },
    { id: 4, name: 'Men 4', category: 'kurta' },
    { id: 5, name: 'Men 5', category: 'clothing' },
    { id: 6, name: 'Men 6', category: 'kurta' },
    { id: 7, name: 'Men 7', category: 'clothing' },
    { id: 8, name: 'Men 6', category: 'kurta' },
    { id: 9, name: 'Men 9', category: 'clothing' },
    { id: 10, name: 'Men 10', category: 'kurta' },
    
]

const womenProduct =[
    { id: 1, name: 'woMen 1', category: 'punjabi' },
    { id: 2, name: 'woMen 2', category: 'western' },
    { id: 3, name: 'woMen 3', category: 'clothing' },
    { id: 4, name: 'woMen 4', category: 'western' },
    { id: 5, name: 'woMen 5', category: 'clothing' },
    { id: 6, name: 'woMen 6', category: 'kupunjabirta' },
    { id: 7, name: 'woMen 7', category: 'western' },
    { id: 8, name: 'woMen 6', category: 'kurta' },
    { id: 9, name: 'woMen 9', category: 'clothing' },
    { id: 10, name: 'woMen 10', category: 'westerna' },
]

const server = http.createServer((req, res) =>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Welcome to men's and women's Dummy data");
    }else if(req.url==='/mens'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end(JSON.stringify(mensProduct.slice(0, 10)));
    }else if(req.url==='/womens'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end(JSON.stringify(womenProduct.slice(0, 10)));
    }else { 
        res.writeHead(400, {'Content-Type':'text/plain'});
        res.end("Page not Found");
    }
})

server.listen(4000, () => {
    console.log("server is running at server 4000..");
})


import http from "http";

const PORT = 4090;

const MIN = 2;
const MAX = 10;

http.createServer((req, res) => {
    // Je génère une valeur aléatoire.
    const randomValue = Math.random() * (MAX - MIN) + MIN;

    console.log(randomValue);

    // Je défini un style pour ma page
    const style = `
    body{
        margin : 0px;
        background-color : #5d7cd8;
        display : flex;
        align-items : center;
        justify-content : center;
        padding : 10px;
        color : white;
        height:100vh;
        font-family : Arial;
        font-size:2rem;
    }
    `;
    // J'envoi le body au client, il contient le CSS et la valeur aléatoire.
    res.end(`<style>${style}</style>\n<h1>${randomValue.toPrecision(2)}</h1>`);
    
}).listen(PORT, () => console.log(`Server listen on http://localhost:${PORT}`));
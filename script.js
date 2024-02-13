const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/', (req, res) => {
    res.send("Welcome to our fruit channel")
  })

app.get('/hello', (req, res) => {
    console.log('Serving up delicious fruits on our webpage!')
    res.send('Serving up delicious fruits on our webpage!')
  })

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Why hello there, ${name}`)
})

app.get('/five' ,(req, res) => {
    const numbers =[1 , 2 , 3 , 4 , 5];
    res.send(numbers);
})

app.get('/fruits', (req, res) => {
    const fruits =['apple','cherry','banana','peach','grape','lemon','strawberry','kiwi'];
    res.send(fruits);
})

app.get('/fruits/:name' , (req, res) =>{
  const fruits = ['apple','cherry','banana','peach','grape','lemon','strawberry','kiwi'];
  const fruitName = req.params.name;
  if (fruits.includes(fruitName)) {
    res.send(fruitName);
  } else {
    res.status(404).send('Fruit not found');
  }
})
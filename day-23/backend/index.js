const express = require('express');

const userRouter = require('./routes/user.routes.js');

const app = express();
// console.log(app);
app.use(express.json());



app.use(userRouter)





const PORT = 8080;

app.listen(PORT,() => {
    console.log(`Server is running at t ${PORT}`);
});



import cors from 'cors';
import express from 'express';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';
import userRouter from './routes/users.js';

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/users', userRouter);
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});



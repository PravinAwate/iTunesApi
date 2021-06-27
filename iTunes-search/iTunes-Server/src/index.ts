import express from 'express';
import iTunesRouter from './routers/ITunesRouter';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";
const app = express();
const allowedOrigins = ['http://localhost:8080'];

const PORT = process.env.PORT || 8000;
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);
app.use('/iTunes', iTunesRouter);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

module.exports = app
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health: http://localhost:${PORT}/api/v1/health`);
  });
};

startServer();

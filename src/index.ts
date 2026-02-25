import express, { Request, Response } from "express";

const app = express();
const PORT = 8080;

// 1. Define the Readiness Endpoint
// This allows external systems to verify the server is "Live"
app.get("/healthz", (req: Request, res: Response) => {
  res.status(200)
     .set("Content-Type", "text/plain; charset=utf-8")
     .send("OK");
});

// 2. Update Static File Path
// This mounts the local ./src/app directory to the /app URL path
app.use("/app", express.static("./src/app"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
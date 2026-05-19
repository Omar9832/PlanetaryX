// server/server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve receipt dynamically
app.get("/receipt/:id", (req, res) => {
  const { id } = req.params;

  // In real app, fetch order info from DB using id
  const email = "customer@example.com";
  const date = new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
  const total = "$9.99";

  const html = `
    <html>
      <head>
        <title>Receipt ${id}</title>
        <style>
          body { font-family: sans-serif; padding: 40px; }
          h1 { color: #08fa59; }
          .details { margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>PlanetaryX Receipt</h1>
        <div class="details">
          <p><strong>Date & Time:</strong> ${date}</p>
          <p><strong>Customer:</strong> ${email}</p>
          <p><strong>Status:</strong> ✓ Successful</p>
          <p><strong>Total Paid:</strong> ${total}</p>
          <p>Thank you for your purchase!</p>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

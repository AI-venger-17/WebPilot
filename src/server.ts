import express, { Request, Response } from 'express';
import { webAssistantTool } from './tools/web_assistant';

const app = express();
app.use(express.json());

// ✅ This is the route your Streamlit app expects
app.post('/api/search', async (req: Request, res: Response) => {
  const { query } = req.body;
  try {
    const response = await webAssistantTool({ query });
    res.json({ success: true, ...response });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ success: false, error: err.message });
    } else {
      res.status(500).json({ success: false, error: 'Unknown error' });
    }
  }
});

// Optional: Keep original route for testing
// app.post('/web_assistant', async (req: Request, res: Response) => { ... });

app.get("/", (req, res) => {
  res.send("✅ MCP Server is up and running!");
});

app.listen(9090, () => {
  console.log('MCP Web Assistant Server running on port 9090');
});

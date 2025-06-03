import express, { Request, Response } from 'express';
import puppeteer from 'puppeteer';

import { webAssistantTool } from './tools/web_assistant';
import { summarizePage } from './tools/summarizePage';

const app = express();
app.use(express.json());

// Endpoint to handle web assistant queries
app.post('/api/search', async (req: Request, res: Response) => {
  const { query } = req.body;
  try {
    const response = await webAssistantTool({ query });
    res.json({ success: true, ...response });
  } catch (err) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// Endpoint to summarize a webpage  
app.post('/summarize', async (req, res) => {
  const { url } = req.body;
  try {
    const summary = await summarizePage(url);
    res.json({ success: true, summary });
  } catch (err) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// Endpoint to open a website in a new browser window
app.post('/open_website', async (req, res) => {
  const { url } = req.body;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  res.json({ success: true, message: `Opened ${url}` });
});

// Health check endpoint
app.get("/", (_req, res) => {
  res.send("✅ MCP Server is up and running!");
});

app.listen(9090, () => {
  console.log('🚀 MCP Web Assistant Server running on port 9090');
});

import express, { Request, Response } from 'express';
import puppeteer from 'puppeteer';

import { webAssistantTool } from './tools/web_assistant';
import { summarizePage } from './tools/summarizePage';
import { priceComparer } from './tools/price_comparer';
import { jobFinder } from './tools/job_finder';

const app = express();
app.use(express.json());

app.post('/api/search', async (req: Request, res: Response) => {
  const { query } = req.body;
  try {
    const response = await webAssistantTool({ query });
    res.json({ success: true, ...response });
  } catch (err) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

app.post('/summarize', async (req, res) => {
  const { url } = req.body;
  try {
    const summary = await summarizePage(url);
    res.json({ success: true, summary });
  } catch (err) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

app.post('/open_website', async (req, res) => {
  const { url } = req.body;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  res.json({ success: true, message: `Opened ${url}` });
});

app.post('/price_comparison', async (req, res) => {
  const { product } = req.body;
  try {
    const result = await priceComparer(product);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

app.post('/job_search', async (req, res) => {
  const { role } = req.body;
  try {
    const result = await jobFinder(role);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

app.get("/", (_req, res) => {
  res.send("✅ MCP Server is up and running!");
});

app.listen(9090, () => {
  console.log('🚀 MCP Web Assistant Server running on port 9090');
});

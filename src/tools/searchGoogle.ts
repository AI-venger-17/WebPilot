import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

export async function searchGoogle(query: string): Promise<void> {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                          'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                          'Chrome/122.0.0.0 Safari/537.36');
  const url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
}

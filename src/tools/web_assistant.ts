import { searchGoogle } from './searchGoogle';

export async function webAssistantTool({ query }: { query: string }) {
  try {
    await searchGoogle(query);
    return { result: `Opened browser for query: "${query}"` };
  } catch (error) {
    throw new Error('Failed to open browser for query.');
  }
}

type HuggingFaceSummaryResponse = { summary_text: string }[];

export async function summarizeText(text: string): Promise<string> {
  const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-small", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: `Summarize this:\n${text}` })
  });

  const data = (await response.json()) as HuggingFaceSummaryResponse;
  return data[0]?.summary_text || "No summary generated.";
}

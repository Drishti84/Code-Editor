import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "YOUR_GEMINI_API_KEY";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateCode(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

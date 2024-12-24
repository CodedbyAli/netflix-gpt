import OpenAI from "openai";

export const openAi = new OpenAI({
  apiKey: process.env.REACT_APP_GPT_KEY,
  dangerouslyAllowBrowser: true,
});
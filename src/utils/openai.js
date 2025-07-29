import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_APIKEY_URL,
  dangerouslyAllowBrowser:true,
});

export default openai;

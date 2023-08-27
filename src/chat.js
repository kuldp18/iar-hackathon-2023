// import { Configuration, OpenAIApi } from 'openai';
import { Configuration, OpenAIApi } from 'openai';

const apiKey = 'pk-xNNxwHlieztOcKCqKJIZzfZhoPpRLOXAlFysNMbdSDgvDkAa';

const configuration = new Configuration({
  apiKey,
  basePath: 'https://api.pawan.krd/v1',
});

configuration.baseOptions.headers = {
  Authorization: `Bearer ${apiKey}`,
};

const openai = new OpenAIApi(configuration);

export const getResponse = async (question) => {
  const prompt = `Act as a BioTechnology and Waste Management Expert and answer to my question in short below:\n${question}`;

  try {
    const response = await openai.createCompletion({
      model: 'pai-001-beta',
      prompt: `Human: ${prompt}\nAI:`,
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['Human: ', 'AI: '],
    });

    return {
      success: true,
      data: response.data.choices[0].text,
    };
  } catch (error) {
    return {
      success: false,
      data: error.response ? error.response.data : 'Issue on server!',
    };
  }
};

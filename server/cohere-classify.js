import cohere from "cohere-ai";
import dotenv from "dotenv";
import { examples } from "./trainingExamples.js";

dotenv.config();

cohere.init(process.env.COHERE_APIKEY);

const inputs = [
  "I want to change my password",
  "Does my policy cover prescription medication?",
];

(async () => {
  const response = await cohere.classify({
    inputs: inputs,
    examples: examples,
  });

  const cohereResponse = response.body.classifications[1].prediction;
  console.log(cohereResponse);
})();

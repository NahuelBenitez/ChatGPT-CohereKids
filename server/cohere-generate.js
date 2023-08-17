import cohere from "cohere-ai";
import dotenv from "dotenv"; // Importar dotenv para cargar las variables de entorno

dotenv.config();
cohere.init(process.env.COHERE_APIKEY);

const prompt = "dime la suma de dos mas dos";

(async () => {
  const response = await cohere.generate({
    prompt: prompt,
    max_tokens: 50,
  });
  const cohereResponse = response.body.generations[0].text; // Obtener solo el texto del body
  console.log(cohereResponse);
})();

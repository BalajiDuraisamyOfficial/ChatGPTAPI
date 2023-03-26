console.log("Chat GPT api app");

import axios from "axios";
import * as env from "dotenv";

env.config({ path: ".env" });

const OPENAI_KEY = process.env.OPEN_AI_SECRET_KEY;

async function askSomethingWithAI(input) {
  try {
    console.log(` `);
    console.log(`User: ${input}`);
    let result = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      }
    );

    console.log(` `);
    console.log(`AI: ${result.data.choices[0].message.content}`);
    console.log(`-------------------------`);
  } catch (err) {
    console.log({ err });
  }
}

async function chat() {
  try {
    await askSomethingWithAI("Hello");
    // await askSomethingWithAI("Can recommend romantic Hollywood movies");
    // await askSomethingWithAI("what robert downey jr movies");

    // await askSomethingWithAI("Tell me about yourself");

    // await askSomethingWithAI("What are openings available for Chess");
    await askSomethingWithAI("do you know about Tajmahal");
  } catch (err) {
    console.log({ err });
  }
}

chat();

#! /usr/bin/env node
// #! [SHEBANG]
// const inquirer = require("inquirer");
// const chalkAnimation = require("chalk-animation");
// const figlet = require("figlet");
// const { createSpinner } = require("nanospinner");
// const chalk = require("chalk");
// const terminalLink = require("terminal-link");

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import chalk from "chalk";
import terminalLink from "terminal-link";

// helper function

const sleep = (ms = 2000) => {
  new Promise((res) => {
    setTimeout(res, ms);
  });
};

async function starting() {
  const rainbowQuery = chalkAnimation.rainbow("Welcome to my cli (⌐■_■) \n");
  await sleep();
  rainbowQuery.stop();
  console.log(`${chalk.bgBlack("Talk is cheap show me the code :")}`);
}

async function whatToChoose() {
  const option = await inquirer.prompt({
    name: "oneOutOfTwo",
    type: "list",
    message:
      "Markdown to HTML [vice-versa] converter or Resource aggregator(⌐■_■)\n",
    choices: ["File-convertor", "Resource-aggregator", "Exit"],
  });

  return choiceHandler(option.oneOutOfTwo);
}

async function askTechnology() {
  const techList = await inquirer.prompt({
    name: "techToLearn",
    type: "list",
    message: "Which tech you wish to learn via project based learning ¬_¬ \n",
    choices: [
      "Nodejs",
      "Expressjs",
      "Reactjs",
      "HTML/CSS",
      "Javascript",
      "Exit",
    ],
  });
  return handleChoice(techList.techToLearn);
}

await starting();

async function handleChoice(whatIs) {
  if (whatIs == "Nodejs") {
    console.log(`To learn Nodejs, you may refer to following links:
    
    ${chalk.bgBlackBright(
      ` 1.) ${terminalLink(
        "Real-time-markdown-viewer",

        "https://scotch.io/tutorials/building-a-real-time-markdown-viewer"
      )}`
    )}
    
    ${chalk.bgBlackBright(
      ` 2.) ${terminalLink(
        "Search-bot",

        "https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1"
      )}`
    )}
    
    ${chalk.bgBlackBright(
      ` 3.) ${terminalLink(
        "Github-bot",

        "https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html"
      )}`
    )}\n`);
    await whatToChoose();
  } else if (whatIs == "Expressjs") {
    console.log(`To learn Nodejs, you may refer to following links:
    
    1.) https://scotch.io/tutorials/building-a-real-time-markdown-viewer
    
    2.) https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1
    
    3.) https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html \n`);
    await whatToChoose();
  } else if (whatIs == "Reactjs") {
    console.log(`To learn Nodejs, you may refer to following links:
    
    1.) https://scotch.io/tutorials/building-a-real-time-markdown-viewer
    
    2.) https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1
    
    3.) https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html \n`);
    await whatToChoose();
  } else if (whatIs == "HTML/CSS") {
    console.log(`To learn Nodejs, you may refer to following links:
    
    1.) https://scotch.io/tutorials/building-a-real-time-markdown-viewer
    
    2.) https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1
    
    3.) https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html \n`);
    await whatToChoose();
  } else if (whatIs == "Javascript") {
    console.log(`To learn Nodejs, you may refer to following links:
    
    1.) https://scotch.io/tutorials/building-a-real-time-markdown-viewer
    
    2.) https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1
    
    3.) https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html \n`);
    await whatToChoose();
  } else {
    console.log(
      `${chalk.blackBright("Thank you for visiting, see you next time!")}`
    );
  }
}

async function choiceHandler(whatIs) {
  if (whatIs == "Resource-aggregator") {
    return await resourceAggregator();
    // return await askTechnology();
  } else if (whatIs == "File-convertor") {
    console.log(
      `${chalk.bgBlackBright(
        `run: ${chalk.bgWhite(
          "npx file-converter--md-html"
        )}`
      )}\n\n`
    );
    return await whatToChoose();
  } else {
    console.log(
      `${chalk.blackBright("Thank you for visiting, see you next time!")}`
    );
  }
}

async function resourceAggregator() {
  const techList = await inquirer.prompt({
    name: "whatToLearn",
    type: "list",
    message: "Choose what you wish to get resources of （￣︶￣）↗　 \n",
    choices: ["Nodejs", "Expressjs", "Reactjs", "Docker", "Exit"],
  });

  return resourceAggregatorChoice(techList.whatToLearn);
}

async function resourceAggregatorChoice(choice) {
  switch (choice) {
    case "Nodejs":
      console.log(`Resources for Nodejs :

      ${chalk.bgBlackBright(
        ` 1.) ${terminalLink(
          "Real-time-markdown-viewer",

          "https://scotch.io/tutorials/building-a-real-time-markdown-viewer"
        )}`
      )}

      ${chalk.bgBlackBright(
        ` 2.) ${terminalLink(
          "Search-bot",

          "https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1"
        )}`
      )}

      ${chalk.bgBlackBright(
        ` 3.) ${terminalLink(
          "Github-bot",

          "https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html"
        )}`
      )}\n`);

      console.log(`Youtube videos for Node:

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Freecodecamp",

          "https://www.youtube.com/watch?v=Oe421EPjeBE&pp=ygUGbm9kZWpz"
        )}`
      )}

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Programming with mosh",

          "https://www.youtube.com/watch?v=TlB_eWDSMt4&pp=ygUGbm9kZWpz"
        )}`
      )}

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Nodejs by Dave Gray",

          "https://www.youtube.com/watch?v=f2EqECiTBL8&pp=ygUGbm9kZWpz"
        )}`
      )}

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Freecodecamp",

          "https://www.youtube.com/watch?v=RLtyhwFtXQA&pp=ygUSbm9kZWpzIGZ1bGwgY291cmNl"
        )}`
      )}`);
      await whatToChoose();
      break;

    case "Expressjs":
      console.log(`Resources for Expressjs :

      ${chalk.bgBlackBright(
        ` 1.) ${terminalLink(
          "Real-time-chat-application by freecodecamp",

          "https://www.freecodecamp.org/news/simple-chat-application-in-node-js-using-express-mongoose-and-socket-io-ee62d94f5804/"
        )}`
      )}\n`);

      console.log(`Youtube videos for Expressjs:

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "By web dev simplified",

          "https://www.youtube.com/watch?v=SccSCuHhOw0&pp=ygUccHJvamVjdHMgdXRpbGl6aW5nIGV4cHJlc3Nqcw%3D%3D"
        )}`
      )}

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "By anson developer",

          "https://www.youtube.com/watch?v=nH9E25nkk3I&pp=ygUccHJvamVjdHMgdXRpbGl6aW5nIGV4cHJlc3Nqcw%3D%3D"
        )}`
      )}

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Real-time-chat-application",

          "https://youtu.be/Fzv-rgwcFKk"
        )}`
      )}`);
      await whatToChoose();
      break;

    case "Reactjs":
      console.log(`Resources for Reactjs :

      ${chalk.bgBlackBright(
        ` 1.) ${terminalLink(
          "Geeks for Geeks: React project aggerator",

          "https://www.geeksforgeeks.org/reactjs-projects/"
        )}`
      )}\n`);
      console.log(`Youtube videos for React:

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Sheryians coding school: React intro (worth the hype)",

          "https://www.youtube.com/watch?v=Xe8CkYZvCig"
        )}`
      )}

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Programming with mosh: React for beginners (another short and crisp content)",

          "https://www.youtube.com/watch?v=SqcY0GlETPk&pp=ygUPcmVhY3QganMgY291cnNl"
        )}`
      )}

      ${chalk.bgBlack(
        `i.) ${terminalLink(
          "Roadmap by Harkirat Singh",

          "https://www.youtube.com/watch?v=G2RpHt8NX0o&t=217s&pp=ygUPcmVhY3QganMgY291cnNl"
        )}`
      )}`);
      await whatToChoose();
      break;

    case "Docker":
      console.log(`Resources for Docker :
      
            ${chalk.bgBlackBright(
              ` 1.) ${terminalLink(
                "Docker Documentation",

                "https://docs.docker.com/"
              )}`
            )}
      
            ${chalk.bgBlackBright(
              ` 2.) ${terminalLink(
                "Project : Docker – Continuous Integration",

                "https://www.geeksforgeeks.org/docker-continuous-integration/"
              )}`
            )}\n`);
      console.log(`Youtube videos for Docker:
      
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Hitesh Choudhary : Docker guide {sufficient actually}",
                "https://www.youtube.com/watch?v=rr9cI4u1_88"
              )}`
            )}`);
      await whatToChoose();
      break;
    case "Exit":
      console.log(
        `${chalk.blackBright("Thank you for visiting, see you next time!")}`
      );
      break;
    default:
      console.log(
        `${chalk.bgBlueBright(
          terminalLink(
            "This repo contains all =]",

            "https://github.com/practical-tutorials/project-based-learning?tab=readme-ov-file"
          )
        )}`
      );
      break;
  }
}
await whatToChoose();

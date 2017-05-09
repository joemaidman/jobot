[![Build Status](https://travis-ci.org/joemaidman/jobot.svg?branch=master)](https://travis-ci.org/joemaidman/jobot)

![Logo](http://www.joemaidman.com/wp-content/uploads/2015/08/HeadD.jpg)
Jobot is an interactive chat bot designed to answer interview questions based on my previous job application submissions.

It is a full stack javascript app built with Node.js and the Microsoft Bot framework. The bot uses regular expressions to select random responses from a databank of answers.

The bot is hosted on Heroku with a web interface available at http://www.joemaidman.com/?page_id=530. Don't be a stranger!

# User stories
```
MVP
As a boss
So that I can interview Jobot
I want to start a conversation and say hi

Version 1
As a boss
So that I can get an idea of what motivate Jobot
I want Jobot to tell me what his motivations are.

As a boss
So that I can get an idea of what strengths Jobot has
I want Jobot to tell me what his strengths are.

Version 2
As a boss
So that I can get an idea of what experience Jobot has
I want Jobot to tell me about his experience when I ask

As a boss
So that I can get an idea of whether my company is a good fit for Jobot
I want Jobot to tell me what his ideal environment is.

As a boss
So that I can get an wider picture of Jobot
I want Jobot to tell me what his hobbies are.

```

## Screenshots
**Chat window**

![home](https://github.com/joemaidman/jobot/blob/master/screenshots/chat.png)

**A conversation**

![conversation](https://github.com/joemaidman/jobot/blob/master/screenshots/conversation.png)

## Technologies & tools
**Backend**
- Node.js: an open-source, cross-platform JavaScript runtime environment
- Microsoft Bot Framework: an SDk to implement a web service that interacts with users in a conversational format

**Testing & coverage**
- Mocha: a feature-rich JavaScript test framework
- Chai: a unit testing assertion library
- Sinon: a testing library for mocking and stubbing
- sinon-chai: a package to use Chai assertions with Sinon
- Istanbul: a JavaScript code coverage tool

**Deployment**
- Heroku (interface via wordpress)

## Installation
- Clone the repo
- `cd` to the project folder
- Run `npm install`
- Visit https://dev.botframework.com/bots and create a bot (excellent documentation available at https://docs.botframework.com/en-us/).
- Install the Microsoft [Bot Framework Emulator](https://docs.botframework.com/en-us/tools/bot-framework-emulator/#mac-and-linux-support-using-command-line-emulator)
- Create a `.env` file in the root directory in the following format using inputs from your bot account:
```
MICROSOFT_APP_ID=[Your bot ID]
MICROSOFT_APP_PASSWORD=[Your bot password]
```

To test:
- Run `npm test`

To run the application locally:
- Run `npm start`
- Visit http://localhost:3978/api/messages via the Microsoft Bot Emulator and input your bot ID and password when prompted

## Potential feature improvements
* Integration testing.
* Improve Jobot's natural language evaluation; the bot currently searches for regular expressions from user input to form a response.

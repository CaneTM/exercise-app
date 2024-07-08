# Setting Up the Project Locally

## Prerequisites

Make sure to have the following installed before proceeding:

1. A terminal that supports Git (e.g. the default terminal if you're using Mac/Linux, [Git Bash](https://git-scm.com/downloads), [WSL](https://learn.microsoft.com/en-us/windows/wsl/install), etc.)

2. [Node.js](https://nodejs.org/en/download/package-manager)

3. [VS Code](https://code.visualstudio.com/)

## Directions for Setup

- Create or navigate to a directory where you would like to store the project

- Open your terminal inside this directory

- Clone the project by doing `git clone https://github.com/CaneTM/exercise-app.git`

- There should now be a new folder in your directory called `exercise-app`. Enter this folder by doing `cd exercise-app`

- Install the necessary dependencies by doing `npm install`

- Copy the `.env.template` file and name the copy `.env`. You can do so by running this command: `cp .env.template .env`

- Open `exercise-app` in VS Code 

- In the VS Code terminal (which you can access via `` ctrl+` ``), run `npm start`. This will run the application.

- In the VS Code terminal output, there should be two addresses with which you can access the application: a `localhost` address and a network IP address (which should be in the format of `XXX.XXX.XX.XX` or something similar). Copy the network IP address.

- In your `.env` file, paste the network IP address into the commented out `REACT_APP_SERVER_DOMAIN` environment variable, surrounding it in single quotes. This should look like `REACT_APP_SERVER_DOMAIN='XXX.XXX.XX.XX'`
    
**Going forward:** 

- If you wish to run the application on just your development machine, uncomment the line containing `REACT_APP_SERVER_DOMAIN='localhost'` in your `.env` and comment out `REACT_APP_SERVER_DOMAIN='XXX.XXX.XX.XX'`

- If you wish to run the application on another device that's connected to the same network as your development machine, uncomment the line containing `REACT_APP_SERVER_DOMAIN='XXX.XXX.XX.XX'` in your `.env` and comment out `REACT_APP_SERVER_DOMAIN='localhost'`

- *Note: modifying the `.env` file will require restarting the application*

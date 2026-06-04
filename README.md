 # Welcome to flight Serivce 

 ## Project Setup
 -clone the project on your local.
 -Execute `npm install` on the same path as of your root directory of tech downloaded project.
 -Create a `.env` in the root directory adn add the following environment variable 
    - `PORT=3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```
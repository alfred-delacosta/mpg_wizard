# MPG Wizard
This application will help people keep track of their vehicles MPG and determine which gas stations/gas providers give their vehicles the best MPG.

## Environment Variables (.env)
1. Copy the .env_sample file and rename it to .env
2. For the following environment variables, use secure random number generator according to OWASP cheatsheet: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cryptographic_Storage_Cheat_Sheet.md#secure-random-number-generation 
    - JWT_ACCESS_SECRET
    - JWT_REFRESH_SECRET
    - PASSWORD_HASHING_SECRET

## Authentication
JSON Web Tokens are used for authentication. The access token and refresh token combination is used in order to provide a pleasant user experience while maintaining secure authentication.

## Packages Installed
- node-argon2 --> https://www.npmjs.com/package/argon2
- cookies --> https://www.npmjs.com/package/cookies
- express --> http://expressjs.com/
- passportjs passport-jwt --> http://www.passportjs.org/packages/passport-jwt/
- passport --> https://www.npmjs.com/package/passport
- nodemon --> https://www.npmjs.com/package/nodemon
- dotenv --> https://www.npmjs.com/package/dotenv
- cors --> https://www.npmjs.com/package/cors
- mongodb --> https://www.npmjs.com/package/mongodb
- mogoose --> https://www.npmjs.com/package/mongoose
- jsonwebtoken --> https://www.npmjs.com/package/jsonwebtoken
- cookie-parser --> https://www.npmjs.com/package/cookie-parser
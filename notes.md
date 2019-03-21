steps to deploy:

1. add "start": "node index.js" to package.json

2. yarn add nodemon --dev // this is for development

3. create .env file in root folder

4. in index.js add

const port = process.env.PORT || 4000;
server.listen(port, () => {
console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

5. in .env add // no spaces but you can have quotes around the 5000

PORT=5000

6. yarn add dotenv

7. add code to the top line of index.js

require("dotenv").config();

8.

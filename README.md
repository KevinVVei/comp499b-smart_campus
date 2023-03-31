# comp499b-smart_campus

Client:

    Install dependencies:

      npm install
      npm install axios

    Start project:  

      npm start

Server:

    Install dependencies:

      npm install express

      npm install bodyParser

      npm install cors

      npm install mysql

      npm install jsonwebtoken

      npm install nodemon //simplifies local testing

    Start server:

      node server.js

      or

      nodemon --watch //allows the server to automatically update after saving changes in file

Local Database Setup:

    Download and install XAMPP (https://www.apachefriends.org/download.html)

    Run the app and start the Apache Web Server and MySQL Database.

    Open a browser and search http://localhost:80/phpmyadmin or whatever works for you to access phpmyadmin.

    Navigate to the 'Import' tab and upload the database.sql file to create and initiallize the database.

    Once successfull, the database should be created and filled with example records.

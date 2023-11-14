# E Commerce Backend
A database application to track your employees

Bootcamp Challenge 13: ORM

Description


This application was developed to empower internet retail businesses in maintaining an updated MySQL database that records specific categories, products, and tags pertinent to their e-commerce operations, encompassing sales and inventory management. Leveraging Sequelize as an ORM (object-relational-mapping) facilitates interaction with the MySQL database, enhancing code readability, reusability, and overall project organization. By employing Sequelize, the project benefits from the decomposition of larger files into more manageable components, promoting code isolation, reducing redundancy (keeping the code DRY), and ensuring maintainability for future development.

This undertaking represents the initial phase of a sophisticated backend application, accessible through tools like Insomnia. Using Insomnia, users can systematically test the functionality of API routes embedded in the application code. This empowers them to effortlessly inspect existing data, introduce new data, update information, and delete records from the database— all without the need for a graphical user interface.
 
![demo](/demo.gif)


Installation

1. Clone the Repository. 
2. Open VSCode, install NodeJS if needed and run npm install in the integrated terminal.
3. Once all packages are installed, open mysql in the terminal and run source ./db/schema.sql and in bash run node ./seeds/index.js.
3. Run the application by typing the command node server.js or npm start in the terminal.


Usage

To initiate the server, go to the application directory, install all dependencies using npm install, and then execute the command npm start (or node index.js). You should see a message in the command line indicating 'App listening on port ${PORT}'. Once the server is active, you will prompted to view, sdd or change the database in ther terminal.


Credits
N/A


License
MIT License

Copyright (c) [2023] [Mukunth Arjunan]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
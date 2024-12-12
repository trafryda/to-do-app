# To-Do List Web App Deployment Guide

Step 1. Create an EC2 instance. Make sure all security roles allow for incoming traffic.

Step 2. Create an RDS MySQL database and connect it to your EC2 instance.

Step 3. Connect to your EC2 instance. You can do this through the browser or the terminal:

Step 4. On your EC2 instance, make sure git, npm, and mariadb105 are all installed. If on Linux this can be done by running:

    sudo yum install git -y
    sudo yum install npm -y
    sudo dnf install mariadb105 -y

Step 5. Once those are installed, copy this repository into your instance:

    git clone https://github.com/trafryda/to-do-app.git

Step 6. Switch to the `to-do-app` directory and make sure to edit `app.js` to work with your database information (username, password, endpoint, name):

    cd to-do-app

Step 7. Initialize `package.json`:

    npm init -y

Step 8. Install other dependencies:

    npm install express mysql2 cors

Step 9. Run the command to launch the web app:

    node app.js

Step 10. Copy and paste the URL that displays into a browser and there is the to-do app.


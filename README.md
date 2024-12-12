Step 1. Create an EC2 instance. Make sure all security roles allow for incoming traffic.
Step 2. Create and RDB mySQL database and connect it to your ec2. 
Step 3. Connect to your EC2 instance. You can do this through the browser or the terminal.
Step 4. On your ec2 instance, make sure git, npm, and mariadb105 are all installed. If on Linux this can be done by running
sudo yum install git -y
sudo yum install npm -y
sudo dnf install mariadb105 -y
Step 5. Once those are installed, copy this repository into your instance. 
git clone https://github.com/trafryda/to-do-app.git
Step 6. Switch to to-do-app directory and make sure to edit app.js to work with your database information (username, password, endpoint, name).
cd to-do-app
Step 7. Initialize package.json
npm init -y
Step 8. Install other dependencies
npm install express mysql2 cors
Step 9. Run command to launch the web app
node app.js
Step 10. Copy and paste the url that displays into a browser and there is the to do app.

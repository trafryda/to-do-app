Step 1. Create an EC2 instance. Make sure all security roles allow for incoming traffic.
Step 2. Create and RDB mySQL database and connect it to your ec2. 
Step 3. Connect to your EC2 instance. You can do this through the browser or the terminal.
Step 4. On your ec2 instance, make sure git, npm, and mariadb105 are all installed. If on Linux this can be done by running
sudo yum install git -y
sudo yum install npm -y
sudo dnf install mariadb105 -y
Step 5. Once those are installed, copy this repository into your instance.
git clone 

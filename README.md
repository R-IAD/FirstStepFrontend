README.md (Summarized Version)
markdown

# My First API Project 🚀

A simple REST API built with Node.js and Express that stores data locally.

## 📦 Dependencies

- **Node.js** (v14 or higher)
- **Express.js** - Web framework

## 🚀 How to Run

### 1. Install Node.js (if not installed)

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm -y

# Verify installation
node --version

2. Install Express
bash

npm install express

3. Run the server
bash

node app.js

4. Access the application

Open your browser and go to:
text

http://192.168.1.4:3000

(Replace 192.168.1.4 with your VM IP address)
📡 API Endpoints
Method	Endpoint	Description
GET	/api/hello	Test endpoint
POST	/api/data	Save data
GET	/api/data	Get all data
📝 Example POST Request
bash

curl -X POST http://192.168.1.4:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"name":"Riad","email":"riad@example.com","message":"Hello!"}'

📁 Files Created

    data.json - Saved data

    data.log - Log file

🔧 Troubleshooting

Port already in use:
bash

sudo lsof -i :3000
sudo kill -9 [PID]

Can't access from browser:
bash

sudo ufw allow 3000

Author: Riad Basha
text


## How to Save:

```bash
cd /home/riadnageh/my-api
nano README.md
# Paste the content above
# Ctrl+X, Y, Enter

That's it! Short, simple, and covers everything needed to run your project. ✅

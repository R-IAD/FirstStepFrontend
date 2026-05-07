const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const VM_IP = '192.168.1.4';

// Serve static files (optional, for CSS if needed)
app.use(express.static('public'));

// Main page - the question
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>El Baba Question</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }
                
                .container {
                    background: white;
                    border-radius: 20px;
                    padding: 50px;
                    max-width: 600px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    animation: fadeIn 0.5s ease-in;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                h1 {
                    color: #333;
                    font-size: 2.5em;
                    margin-bottom: 30px;
                    font-weight: bold;
                }
                
                .question {
                    color: #667eea;
                    font-size: 2em;
                    margin-bottom: 50px;
                    padding: 20px;
                    background: #f0f0f0;
                    border-radius: 15px;
                }
                
                .buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                
                button {
                    font-size: 1.5em;
                    padding: 15px 40px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: bold;
                }
                
                .btn-yes {
                    background: #4caf50;
                    color: white;
                    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
                }
                
                .btn-yes:hover {
                    background: #45a049;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
                }
                
                .btn-no {
                    background: #f44336;
                    color: white;
                    box-shadow: 0 5px 15px rgba(244, 67, 54, 0.3);
                }
                
                .btn-no:hover {
                    background: #da190b;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(244, 67, 54, 0.4);
                }
                
                button:active {
                    transform: translateY(0);
                }
                
                @media (max-width: 480px) {
                    .container {
                        padding: 30px;
                    }
                    
                    h1 {
                        font-size: 1.8em;
                    }
                    
                    .question {
                        font-size: 1.3em;
                    }
                    
                    button {
                        font-size: 1.2em;
                        padding: 12px 30px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🤔 سؤال مهم جداً</h1>
                <div class="question">
                    "Riad Basha hwa el Baba?"
                </div>
                <div class="buttons">
                    <button class="btn-yes" onclick="window.location.href='/aywa'">✅ Aywa</button>
                    <button class="btn-no" onclick="window.location.href='/la'">❌ La</button>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Page when clicking "Aywa"
app.get('/aywa', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>❤️ 7abibi w a5oya</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }
                
                .container {
                    background: white;
                    border-radius: 20px;
                    padding: 60px;
                    max-width: 600px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    animation: bounceIn 0.6s ease-out;
                }
                
                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.05);
                    }
                    70% {
                        transform: scale(0.95);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                
                .heart {
                    font-size: 80px;
                    animation: heartbeat 1.5s ease infinite;
                }
                
                @keyframes heartbeat {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                }
                
                h1 {
                    color: #f5576c;
                    font-size: 2.5em;
                    margin: 30px 0;
                    line-height: 1.3;
                }
                
                .message {
                    font-size: 1.5em;
                    color: #555;
                    margin: 30px 0;
                }
                
                button {
                    background: #f5576c;
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    font-size: 1.2em;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 20px;
                    box-shadow: 0 5px 15px rgba(245, 87, 108, 0.3);
                }
                
                button:hover {
                    background: #f093fb;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(240, 147, 251, 0.4);
                }
                
                @media (max-width: 480px) {
                    .container {
                        padding: 40px;
                    }
                    
                    h1 {
                        font-size: 1.8em;
                    }
                    
                    .message {
                        font-size: 1.2em;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="heart">❤️😍❤️</div>
                <h1>7abibi w a5oya w kfa2a!</h1>
                <div class="message">
                    🤝 انت فعلاً فاهم كويس<br>
                    ربنا يخليكم لبعض يا غاليين
                </div>
                <button onclick="window.location.href='/'">🔙 Return to Question</button>
            </div>
        </body>
        </html>
    `);
});

// Page when clicking "La"
app.get('/la', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>🤔 Enta wala fahem</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }
                
                .container {
                    background: white;
                    border-radius: 20px;
                    padding: 60px;
                    max-width: 600px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    animation: shake 0.5s ease-in-out;
                }
                
                @keyframes shake {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    10%, 30%, 50%, 70%, 90% {
                        transform: translateX(-10px);
                    }
                    20%, 40%, 60%, 80% {
                        transform: translateX(10px);
                    }
                }
                
                .confused {
                    font-size: 80px;
                    animation: spin 2s ease-in-out;
                }
                
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                h1 {
                    color: #4facfe;
                    font-size: 2.5em;
                    margin: 30px 0;
                    line-height: 1.3;
                }
                
                .message {
                    font-size: 1.5em;
                    color: #555;
                    margin: 30px 0;
                }
                
                button {
                    background: #4facfe;
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    font-size: 1.2em;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 20px;
                    box-shadow: 0 5px 15px rgba(79, 172, 254, 0.3);
                }
                
                button:hover {
                    background: #00f2fe;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 242, 254, 0.4);
                }
                
                @media (max-width: 480px) {
                    .container {
                        padding: 40px;
                    }
                    
                    h1 {
                        font-size: 1.8em;
                    }
                    
                    .message {
                        font-size: 1.2em;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="confused">🤔😕🤷‍♂️</div>
                <h1>Enta wala fahem ay 7aga!</h1>
                <div class="message">
                    💔 معلش يعني انت مش فاهم فاكر نفسك صح؟<br>
                    روح اتعلم تاني يا حبيبي 😅
                </div>
                <button onclick="window.location.href='/'">🔙 ارجع اسأل تاني</button>
            </div>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log('\n========================================');
    console.log('🎉 El Baba Application is Running!');
    console.log('========================================');
    console.log(`📱 Open in browser: http://${VM_IP}:${PORT}`);
    console.log(`📱 Or on same network: http://localhost:${PORT}`);
    console.log('\n💡 Question: "Riad Basha hwa el Baba?"');
    console.log('✅ Aywa -> Love page');
    console.log('❌ La -> Funny page');
    console.log('========================================\n');
});

// Optional: Add a 404 handler for any other routes
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - Page Not Found</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                h1 { font-size: 3em; }
                a { color: white; text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>404 - Ya 7abibi el page di mish mawgoda!</h1>
            <p><a href="/">🚀 Go back to the question</a></p>
        </body>
        </html>
    `);
});

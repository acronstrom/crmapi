// Local development server for testing
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Import API handlers
const indexHandler = require('./api/index.js');
const contactsHandler = require('./api/contacts.js');
const companiesHandler = require('./api/companies.js');
const dealsHandler = require('./api/deals.js');
const activitiesHandler = require('./api/activities.js');
const allHandler = require('./api/all.js');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Create mock request object with query parameters
  const mockReq = {
    url: req.url,
    method: req.method,
    query: parsedUrl.query,
    headers: req.headers
  };
  
  // Create mock response object
  const mockRes = {
    statusCode: 200,
    headers: {},
    setHeader: (key, value) => {
      res.setHeader(key, value);
    },
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    json: function(data) {
      res.writeHead(this.statusCode, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data, null, 2));
    }
  };
  
  // Route requests
  try {
    // Serve the HTML page at root
    if (pathname === '/') {
      const htmlPath = path.join(__dirname, 'public', 'index.html');
      const html = fs.readFileSync(htmlPath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      return;
    }
    
    if (pathname === '/api' || pathname === '/api/') {
      indexHandler(mockReq, mockRes);
    } else if (pathname === '/api/contacts') {
      contactsHandler(mockReq, mockRes);
    } else if (pathname === '/api/companies') {
      companiesHandler(mockReq, mockRes);
    } else if (pathname === '/api/deals') {
      dealsHandler(mockReq, mockRes);
    } else if (pathname === '/api/activities') {
      activitiesHandler(mockReq, mockRes);
    } else if (pathname === '/api/all') {
      allHandler(mockReq, mockRes);
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }, null, 2));
    }
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }, null, 2));
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 CRM API Server running!`);
  console.log(`\n📍 Open in browser:  http://localhost:${PORT}`);
  console.log(`\n📋 API endpoints:`);
  console.log(`   http://localhost:${PORT}/api`);
  console.log(`   http://localhost:${PORT}/api/contacts`);
  console.log(`   http://localhost:${PORT}/api/companies`);
  console.log(`   http://localhost:${PORT}/api/deals`);
  console.log(`   http://localhost:${PORT}/api/activities`);
  console.log(`   http://localhost:${PORT}/api/all`);
  console.log(`\n✨ Ready for your chatbot demo!\n`);
});


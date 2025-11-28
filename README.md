# CRM API - Mock Data for Chatbot Demo

A REST API providing mock CRM data, deployed on Vercel. Perfect for demonstrating chatbot capabilities with realistic business data.

## 🚀 Live API Endpoints

Once deployed, your API will be available at:
- `https://your-project.vercel.app/api`
- `https://your-project.vercel.app/api/contacts`
- `https://your-project.vercel.app/api/companies`
- `https://your-project.vercel.app/api/deals`
- `https://your-project.vercel.app/api/activities`
- `https://your-project.vercel.app/api/all`

## 📋 API Documentation

### Base Endpoint
```
GET /api
```
Returns API information and available endpoints.

### Contacts
```
GET /api/contacts
```
Returns mock contact data with support for filtering.

**Query Parameters:**
- `id` - Get specific contact by ID
- `status` - Filter by status (active/inactive)
- `company` - Filter by company name

**Example:**
```
GET /api/contacts?status=active
GET /api/contacts?id=1
```

### Companies
```
GET /api/companies
```
Returns mock company data.

**Query Parameters:**
- `id` - Get specific company by ID
- `status` - Filter by status (customer/prospect/lead/inactive)
- `industry` - Filter by industry
- `size` - Filter by company size (Enterprise/Mid-Market/Startup)

**Example:**
```
GET /api/companies?status=customer
GET /api/companies?industry=technology
```

### Deals
```
GET /api/deals
```
Returns mock deal/opportunity data with pipeline metrics.

**Query Parameters:**
- `id` - Get specific deal by ID
- `stage` - Filter by stage (discovery/qualification/proposal/negotiation/closed-won/closed-lost)
- `company` - Filter by company name
- `owner` - Filter by deal owner

**Example:**
```
GET /api/deals?stage=negotiation
GET /api/deals?company=Acme
```

### Activities
```
GET /api/activities
```
Returns mock activity data (meetings, calls, emails, tasks).

**Query Parameters:**
- `id` - Get specific activity by ID
- `type` - Filter by type (meeting/call/email/task/demo)
- `status` - Filter by status (scheduled/in-progress/completed/overdue)
- `company` - Filter by company name
- `assignedTo` - Filter by assignee

**Example:**
```
GET /api/activities?status=pending
GET /api/activities?type=meeting
```

### All Data
```
GET /api/all
```
Returns all CRM data in a single response with summary statistics. Ideal for providing context to your chatbot.

## 🛠️ Deployment Instructions

### Prerequisites
- Node.js installed (v14 or later)
- A Vercel account (free tier works great!)

### Deploy to Vercel

#### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Press enter (or give it a custom name)
   - In which directory is your code located? **.**
   
4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

#### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Click "Deploy"

That's it! Your API will be live in seconds.

## 🧪 Local Development

1. **Install dependencies:**
   ```bash
   npm install -g vercel
   ```

2. **Run locally:**
   ```bash
   vercel dev
   ```

3. **Test the API:**
   ```bash
   # Test in browser or use curl:
   curl http://localhost:3000/api/contacts
   ```

## 💡 Using with Your Chatbot

This API is designed to provide your chatbot with realistic CRM data. Here are some example queries your chatbot could handle:

- "Show me all active contacts"
- "What deals are in negotiation stage?"
- "List all companies in the technology industry"
- "What meetings do I have scheduled?"
- "Give me a summary of our pipeline"

### Example Chatbot Integration

```javascript
// Fetch all CRM data for context
const response = await fetch('https://your-api.vercel.app/api/all');
const crmData = await response.json();

// Use this data to answer user questions
// Pass it to your AI/chatbot as context
```

## 🔒 CORS Support

The API includes CORS headers, so you can call it from any web application or chatbot interface.

## 📝 Customizing the Data

To customize the mock data:
1. Edit the respective files in the `/api` directory
2. Modify the mock data arrays
3. Redeploy with `vercel --prod`

## 🎯 Features

✅ RESTful API design  
✅ Query parameter filtering  
✅ Realistic CRM data  
✅ CORS enabled  
✅ Zero-config deployment  
✅ Serverless architecture  
✅ Fast response times  
✅ No database required  

## 📧 Support

For questions or issues, feel free to reach out or check the [Vercel documentation](https://vercel.com/docs).

---

**Happy Demoing! 🚀**


const mockCompanies = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    size: "Enterprise",
    employees: 5000,
    revenue: "$500M",
    website: "https://acme-corp.example.com",
    address: {
      street: "123 Tech Boulevard",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipCode: "94105"
    },
    status: "customer",
    relationshipScore: 95,
    accountOwner: "John Sales",
    createdAt: "2024-06-15T08:00:00Z",
    lastActivity: "2025-11-25T10:30:00Z",
    tags: ["enterprise", "tech", "high-value"]
  },
  {
    id: 2,
    name: "TechStart",
    industry: "Software",
    size: "Startup",
    employees: 50,
    revenue: "$5M",
    website: "https://techstart.io",
    address: {
      street: "456 Innovation Street",
      city: "Austin",
      state: "TX",
      country: "USA",
      zipCode: "78701"
    },
    status: "prospect",
    relationshipScore: 72,
    accountOwner: "Sarah Hunter",
    createdAt: "2025-02-20T09:15:00Z",
    lastActivity: "2025-11-27T14:20:00Z",
    tags: ["startup", "growing", "tech"]
  },
  {
    id: 3,
    name: "Innovate Solutions",
    industry: "Consulting",
    size: "Mid-Market",
    employees: 500,
    revenue: "$50M",
    website: "https://innovate-solutions.com",
    address: {
      street: "789 Business Park",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001"
    },
    status: "prospect",
    relationshipScore: 68,
    accountOwner: "Mike Johnson",
    createdAt: "2025-03-10T11:30:00Z",
    lastActivity: "2025-11-20T16:45:00Z",
    tags: ["consulting", "mid-market"]
  },
  {
    id: 4,
    name: "Global Sales Inc",
    industry: "Sales",
    size: "Enterprise",
    employees: 2000,
    revenue: "$200M",
    website: "https://globalsales.example",
    address: {
      street: "321 Commerce Drive",
      city: "Chicago",
      state: "IL",
      country: "USA",
      zipCode: "60601"
    },
    status: "lead",
    relationshipScore: 45,
    accountOwner: "Emily Davis",
    createdAt: "2025-04-05T13:20:00Z",
    lastActivity: "2025-11-15T09:00:00Z",
    tags: ["enterprise", "sales"]
  },
  {
    id: 5,
    name: "Enterprise Co",
    industry: "Manufacturing",
    size: "Enterprise",
    employees: 10000,
    revenue: "$1B",
    website: "https://enterprise-co.com",
    address: {
      street: "555 Industrial Way",
      city: "Detroit",
      state: "MI",
      country: "USA",
      zipCode: "48201"
    },
    status: "inactive",
    relationshipScore: 30,
    accountOwner: "David Wilson",
    createdAt: "2025-01-08T10:00:00Z",
    lastActivity: "2025-10-01T12:00:00Z",
    tags: ["enterprise", "manufacturing", "dormant"]
  }
];

module.exports = (req, res) => {
  const { id, status, industry, size } = req.query;
  
  let filteredCompanies = mockCompanies;
  
  // Filter by ID if provided
  if (id) {
    const company = mockCompanies.find(c => c.id === parseInt(id));
    return res.status(company ? 200 : 404).json(
      company || { error: "Company not found" }
    );
  }
  
  // Filter by status
  if (status) {
    filteredCompanies = filteredCompanies.filter(c => c.status === status);
  }
  
  // Filter by industry
  if (industry) {
    filteredCompanies = filteredCompanies.filter(c => 
      c.industry.toLowerCase().includes(industry.toLowerCase())
    );
  }
  
  // Filter by size
  if (size) {
    filteredCompanies = filteredCompanies.filter(c => 
      c.size.toLowerCase() === size.toLowerCase()
    );
  }
  
  res.status(200).json({
    total: filteredCompanies.length,
    data: filteredCompanies
  });
};


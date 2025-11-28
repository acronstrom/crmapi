const mockContacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1-555-0101",
    company: "Acme Corporation",
    position: "CEO",
    status: "active",
    tags: ["decision-maker", "hot-lead"],
    lastContact: "2025-11-25T10:30:00Z",
    createdAt: "2025-01-15T08:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=12",
    notes: "Very interested in enterprise solution"
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.j@techstart.io",
    phone: "+1-555-0102",
    company: "TechStart",
    position: "CTO",
    status: "active",
    tags: ["technical", "warm-lead"],
    lastContact: "2025-11-27T14:20:00Z",
    createdAt: "2025-02-20T09:15:00Z",
    avatar: "https://i.pravatar.cc/150?img=5",
    notes: "Requested demo for Q1 2026"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Chen",
    email: "m.chen@innovate.com",
    phone: "+1-555-0103",
    company: "Innovate Solutions",
    position: "Product Manager",
    status: "active",
    tags: ["product", "evaluating"],
    lastContact: "2025-11-20T16:45:00Z",
    createdAt: "2025-03-10T11:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=33",
    notes: "Comparing with competitors"
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.r@salesforce.example",
    phone: "+1-555-0104",
    company: "Global Sales Inc",
    position: "Sales Director",
    status: "active",
    tags: ["decision-maker", "cold-lead"],
    lastContact: "2025-11-15T09:00:00Z",
    createdAt: "2025-04-05T13:20:00Z",
    avatar: "https://i.pravatar.cc/150?img=45",
    notes: "Initial outreach completed"
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Kim",
    email: "david.kim@enterprise.co",
    phone: "+1-555-0105",
    company: "Enterprise Co",
    position: "VP Operations",
    status: "inactive",
    tags: ["follow-up-needed"],
    lastContact: "2025-10-01T12:00:00Z",
    createdAt: "2025-01-08T10:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=68",
    notes: "Lost contact after initial meeting"
  }
];

module.exports = (req, res) => {
  const { id, status, company } = req.query;
  
  let filteredContacts = mockContacts;
  
  // Filter by ID if provided
  if (id) {
    const contact = mockContacts.find(c => c.id === parseInt(id));
    return res.status(contact ? 200 : 404).json(
      contact || { error: "Contact not found" }
    );
  }
  
  // Filter by status
  if (status) {
    filteredContacts = filteredContacts.filter(c => c.status === status);
  }
  
  // Filter by company
  if (company) {
    filteredContacts = filteredContacts.filter(c => 
      c.company.toLowerCase().includes(company.toLowerCase())
    );
  }
  
  res.status(200).json({
    total: filteredContacts.length,
    data: filteredContacts
  });
};


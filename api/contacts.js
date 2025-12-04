const mockContacts = [
  {
    id: 10001,
    firstName: "Emma",
    lastName: "Johansen",
    email: "emma.johansen@gmail.com",
    phone: "+47-91-234-567",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Plus Plan - 500 Mbps",
    monthlyRate: "$59.99",
    tags: ["residential", "current-customer", "plus-plan"],
    lastContact: "2025-11-28T10:15:00Z",
    createdAt: "2024-03-15T09:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=5",
    notes: "Upgraded from Basic to Plus plan 6 months ago. Very happy with 4K streaming. Family of 4 with multiple devices."
  },
  {
    id: 10002,
    firstName: "Lars",
    lastName: "Hansen",
    email: "lars.hansen@outlook.com",
    phone: "+47-92-345-678",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Basic Plan - 100 Mbps",
    monthlyRate: "$39.99",
    tags: ["residential", "current-customer", "basic-plan", "budget-conscious"],
    lastContact: "2025-11-25T14:30:00Z",
    createdAt: "2025-06-20T11:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=12",
    notes: "Single person household. Basic plan works perfectly for HD streaming and work from home. Satisfied with email support."
  },
  {
    id: 10003,
    firstName: "Sofie",
    lastName: "Andersen",
    email: "sofie.a@hotmail.com",
    phone: "+47-93-456-789",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Premium Plan - 1 Gbps",
    monthlyRate: "$79.99",
    tags: ["residential", "current-customer", "premium-plan", "gamer"],
    lastContact: "2025-11-27T16:45:00Z",
    createdAt: "2024-09-10T13:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=9",
    notes: "Professional gamer and streamer. Premium plan with Mesh WiFi and VPN is perfect. Uses advanced parental controls for kids."
  },
  {
    id: 10004,
    firstName: "Bjørn",
    lastName: "Olsen",
    email: "bjorn.olsen@gmail.com",
    phone: "+47-94-567-890",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Plus Plan - 500 Mbps",
    monthlyRate: "$59.99",
    tags: ["residential", "prospect", "upgrade-interested", "plus-plan"],
    lastContact: "2025-11-26T11:20:00Z",
    createdAt: "2025-10-05T10:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=33",
    notes: "New customer on Plus plan. Considering Premium upgrade for better gaming experience. Interested in VPN feature."
  },
  {
    id: 10005,
    firstName: "Ingrid",
    lastName: "Berg",
    email: "ingrid.berg@yahoo.com",
    phone: "+47-95-678-901",
    company: "Residential Customer",
    position: "Apartment Resident",
    status: "active",
    currentPlan: "Basic Plan - 100 Mbps",
    monthlyRate: "$39.99",
    tags: ["residential", "current-customer", "basic-plan", "student"],
    lastContact: "2025-11-20T09:00:00Z",
    createdAt: "2025-08-01T12:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=45",
    notes: "Student in apartment. Basic plan sufficient for online classes and Netflix. Appreciates no contract requirement."
  },
  {
    id: 10006,
    firstName: "Thomas",
    lastName: "Nilsen",
    email: "thomas.n@icloud.com",
    phone: "+47-96-789-012",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Plus Plan - 500 Mbps",
    monthlyRate: "$59.99",
    tags: ["residential", "current-customer", "plus-plan", "family"],
    lastContact: "2025-11-24T15:30:00Z",
    createdAt: "2024-01-20T14:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=68",
    notes: "Family of 5 with teenagers. Plus plan handles 4K streaming on multiple devices. Happy with advanced WiFi router and parental controls."
  },
  {
    id: 10007,
    firstName: "Kari",
    lastName: "Pedersen",
    email: "kari.pedersen@gmail.com",
    phone: "+47-97-890-123",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Basic Plan - 100 Mbps",
    monthlyRate: "$39.99",
    tags: ["residential", "prospect", "upgrade-potential", "basic-plan"],
    lastContact: "2025-11-22T13:45:00Z",
    createdAt: "2025-09-15T08:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=20",
    notes: "Elderly couple. Basic plan working well for email and video calls. Might upgrade to Plus if grandkids visit more often."
  },
  {
    id: 10008,
    firstName: "Henrik",
    lastName: "Larsen",
    email: "henrik.larsen@proton.me",
    phone: "+47-98-901-234",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Premium Plan - 1 Gbps",
    monthlyRate: "$79.99",
    tags: ["residential", "current-customer", "premium-plan", "tech-enthusiast"],
    lastContact: "2025-11-29T10:00:00Z",
    createdAt: "2024-11-01T09:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=15",
    notes: "Works from home as software developer. Premium plan with VPN essential for security. Loves the Mesh WiFi system coverage."
  },
  {
    id: 10009,
    firstName: "Astrid",
    lastName: "Eriksen",
    email: "astrid.eriksen@gmail.com",
    phone: "+47-99-012-345",
    company: "Residential Customer",
    position: "Apartment Resident",
    status: "active",
    currentPlan: "Plus Plan - 500 Mbps",
    monthlyRate: "$59.99",
    tags: ["residential", "current-customer", "plus-plan", "remote-worker"],
    lastContact: "2025-11-23T14:15:00Z",
    createdAt: "2025-02-28T11:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=47",
    notes: "Remote marketing professional. Plus plan perfect for video conferences and cloud uploads. Priority support has been excellent."
  },
  {
    id: 10010,
    firstName: "Magnus",
    lastName: "Kristensen",
    email: "magnus.k@gmail.com",
    phone: "+47-90-123-456",
    company: "Residential Customer",
    position: "Homeowner",
    status: "inactive",
    currentPlan: "Basic Plan - 100 Mbps",
    monthlyRate: "$39.99",
    tags: ["residential", "churned", "follow-up-needed", "price-sensitive"],
    lastContact: "2025-10-15T16:00:00Z",
    createdAt: "2024-05-10T10:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=52",
    notes: "Cancelled service last month due to moving. Expressed interest in reconnecting at new address. Should follow up with coverage check."
  },
  {
    id: 10011,
    firstName: "Andreas",
    lastName: "Cronström",
    email: "andreas.cronstrom@puzzel.com",
    phone: "+46734488888",
    company: "Residential Customer",
    position: "Homeowner",
    status: "active",
    currentPlan: "Basic Plan - 100 Mbps",
    monthlyRate: "$39.99",
    tags: ["residential", "current-customer", "basic-plan", "puzzel-employee"],
    lastContact: "2025-12-04T12:00:00Z",
    createdAt: "2025-12-04T12:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=70",
    notes: "New customer from Sweden. Basic plan perfect for home office and streaming needs. Puzzel employee."
  }
];

module.exports = (req, res) => {
  const { id, status, company, email } = req.query;
  
  let filteredContacts = mockContacts;
  
  // Filter by ID if provided
  if (id) {
    const contact = mockContacts.find(c => c.id === parseInt(id));
    return res.status(contact ? 200 : 404).json(
      contact || { error: "Contact not found" }
    );
  }
  
  // Filter by email if provided
  if (email) {
    const contact = mockContacts.find(c => 
      c.email.toLowerCase() === email.toLowerCase()
    );
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


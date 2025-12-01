const mockContacts = [
  {
    id: 10001,
    firstName: "Lars",
    lastName: "Eriksen",
    email: "lars.eriksen@nordictech.no",
    phone: "+47-22-334-501",
    company: "Nordic Tech AS",
    position: "IT Director",
    status: "active",
    tags: ["fiber-interested", "enterprise", "hot-lead"],
    lastContact: "2025-11-28T09:30:00Z",
    createdAt: "2025-10-15T08:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=12",
    notes: "Looking to upgrade to 1Gbps fiber for 50+ employees. Budget approved for Q1 2026."
  },
  {
    id: 10002,
    firstName: "Ingrid",
    lastName: "Hansen",
    email: "ingrid.h@oslobank.no",
    phone: "+47-21-445-602",
    company: "Oslo Bank",
    position: "Head of Operations",
    status: "active",
    tags: ["enterprise", "fiber", "decision-maker"],
    lastContact: "2025-11-27T14:15:00Z",
    createdAt: "2025-09-22T10:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=5",
    notes: "Requires dedicated fiber line with 99.9% SLA. Discussing 10Gbps connection for data center."
  },
  {
    id: 10003,
    firstName: "Bjørn",
    lastName: "Olsen",
    email: "bjorn.olsen@designstudio.no",
    phone: "+47-95-123-703",
    company: "Creative Design Studio",
    position: "Studio Manager",
    status: "active",
    tags: ["smb", "warm-lead", "speed-focused"],
    lastContact: "2025-11-25T11:00:00Z",
    createdAt: "2025-11-01T13:45:00Z",
    avatar: "https://i.pravatar.cc/150?img=33",
    notes: "Small business with 15 employees. Need faster upload speeds for large video files. Interested in 500Mbps package."
  },
  {
    id: 10004,
    firstName: "Kari",
    lastName: "Johansen",
    email: "kari.j@healthcare-solutions.no",
    phone: "+47-23-556-804",
    company: "Healthcare Solutions Norge",
    position: "IT Manager",
    status: "active",
    tags: ["healthcare", "security-focused", "fiber"],
    lastContact: "2025-11-26T10:30:00Z",
    createdAt: "2025-10-10T09:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=45",
    notes: "Requires HIPAA-compliant connectivity solution. Interested in managed security services with fiber package."
  },
  {
    id: 10005,
    firstName: "Thomas",
    lastName: "Berg",
    email: "thomas.berg@retailchain.no",
    phone: "+47-22-778-905",
    company: "Retail Chain Norway",
    position: "Regional Manager",
    status: "active",
    tags: ["multi-location", "enterprise", "negotiation"],
    lastContact: "2025-11-20T15:45:00Z",
    createdAt: "2025-08-15T11:20:00Z",
    avatar: "https://i.pravatar.cc/150?img=68",
    notes: "Managing 12 retail locations. Needs unified broadband solution across all stores. Discussing volume discount."
  },
  {
    id: 10006,
    firstName: "Sofie",
    lastName: "Andersen",
    email: "sofie.andersen@startup-hub.no",
    phone: "+47-98-234-106",
    company: "StartUp Hub Bergen",
    position: "Co-founder",
    status: "active",
    tags: ["startup", "budget-conscious", "warm-lead"],
    lastContact: "2025-11-24T13:20:00Z",
    createdAt: "2025-11-05T14:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=9",
    notes: "New startup with 8 people. Looking for flexible contract with scalability. Interested in 250Mbps starter plan."
  },
  {
    id: 10007,
    firstName: "Henrik",
    lastName: "Nilsen",
    email: "henrik.nilsen@construction-co.no",
    phone: "+47-41-667-207",
    company: "Nordic Construction Co",
    position: "Operations Director",
    status: "active",
    tags: ["industrial", "multiple-sites", "cold-lead"],
    lastContact: "2025-11-18T09:00:00Z",
    createdAt: "2025-10-28T08:15:00Z",
    avatar: "https://i.pravatar.cc/150?img=15",
    notes: "Construction company with temporary site offices. Needs mobile broadband solutions for project sites."
  },
  {
    id: 10008,
    firstName: "Emma",
    lastName: "Kristensen",
    email: "emma.k@law-partners.no",
    phone: "+47-22-889-308",
    company: "Law Partners Oslo",
    position: "Senior Partner",
    status: "active",
    tags: ["professional-services", "security", "hot-lead"],
    lastContact: "2025-11-29T11:45:00Z",
    createdAt: "2025-09-12T10:00:00Z",
    avatar: "https://i.pravatar.cc/150?img=20",
    notes: "Law firm with 25 attorneys. Priority on secure connection and data privacy. Ready to sign for 1Gbps fiber + VPN service."
  },
  {
    id: 10009,
    firstName: "Magnus",
    lastName: "Pedersen",
    email: "magnus.p@education-center.no",
    phone: "+47-51-223-409",
    company: "Stavanger Education Center",
    position: "Head of IT",
    status: "active",
    tags: ["education", "high-capacity", "evaluating"],
    lastContact: "2025-11-22T14:00:00Z",
    createdAt: "2025-10-20T12:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=52",
    notes: "Educational institution with 500+ students. Need high-capacity connection for online learning. Comparing providers."
  },
  {
    id: 10010,
    firstName: "Astrid",
    lastName: "Larsen",
    email: "astrid.larsen@hotel-group.no",
    phone: "+47-55-334-510",
    company: "Nordic Hotel Group",
    position: "IT Procurement Manager",
    status: "inactive",
    tags: ["hospitality", "guest-wifi", "follow-up-needed"],
    lastContact: "2025-10-30T16:00:00Z",
    createdAt: "2025-09-01T09:45:00Z",
    avatar: "https://i.pravatar.cc/150?img=47",
    notes: "Hotel chain with 5 properties. Interested in guest WiFi solutions. Went silent after initial proposal. Need to re-engage."
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


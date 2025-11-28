// This endpoint returns all CRM data in one response
// Useful for chatbot context or dashboard overview

const mockContacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1-555-0101",
    company: "Acme Corporation",
    position: "CEO",
    status: "active"
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.j@techstart.io",
    phone: "+1-555-0102",
    company: "TechStart",
    position: "CTO",
    status: "active"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Chen",
    email: "m.chen@innovate.com",
    phone: "+1-555-0103",
    company: "Innovate Solutions",
    position: "Product Manager",
    status: "active"
  }
];

const mockCompanies = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    size: "Enterprise",
    employees: 5000,
    status: "customer"
  },
  {
    id: 2,
    name: "TechStart",
    industry: "Software",
    size: "Startup",
    employees: 50,
    status: "prospect"
  },
  {
    id: 3,
    name: "Innovate Solutions",
    industry: "Consulting",
    size: "Mid-Market",
    employees: 500,
    status: "prospect"
  }
];

const mockDeals = [
  {
    id: 1,
    title: "Enterprise Platform License",
    company: "Acme Corporation",
    value: 250000,
    stage: "negotiation",
    probability: 75
  },
  {
    id: 2,
    title: "Starter Package - TechStart",
    company: "TechStart",
    value: 15000,
    stage: "proposal",
    probability: 60
  },
  {
    id: 3,
    title: "Consulting Services Package",
    company: "Innovate Solutions",
    value: 75000,
    stage: "qualification",
    probability: 40
  }
];

const mockActivities = [
  {
    id: 1,
    type: "meeting",
    title: "Q4 Review Meeting",
    company: "Acme Corporation",
    status: "completed",
    scheduledDate: "2025-11-25T10:30:00Z"
  },
  {
    id: 2,
    type: "call",
    title: "Demo Follow-up Call",
    company: "TechStart",
    status: "completed",
    scheduledDate: "2025-11-27T14:20:00Z"
  },
  {
    id: 3,
    type: "email",
    title: "Pricing Information Request",
    company: "Innovate Solutions",
    status: "pending",
    scheduledDate: "2025-11-29T09:00:00Z"
  }
];

module.exports = (req, res) => {
  const summary = {
    contacts: {
      total: mockContacts.length,
      active: mockContacts.filter(c => c.status === 'active').length
    },
    companies: {
      total: mockCompanies.length,
      customers: mockCompanies.filter(c => c.status === 'customer').length,
      prospects: mockCompanies.filter(c => c.status === 'prospect').length
    },
    deals: {
      total: mockDeals.length,
      totalValue: mockDeals.reduce((sum, d) => sum + d.value, 0),
      weightedValue: Math.round(mockDeals.reduce((sum, d) => sum + (d.value * d.probability / 100), 0))
    },
    activities: {
      total: mockActivities.length,
      completed: mockActivities.filter(a => a.status === 'completed').length,
      pending: mockActivities.filter(a => a.status === 'pending').length
    }
  };

  res.status(200).json({
    summary,
    data: {
      contacts: mockContacts,
      companies: mockCompanies,
      deals: mockDeals,
      activities: mockActivities
    }
  });
};


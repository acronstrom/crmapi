const mockDeals = [
  {
    id: 1,
    title: "Enterprise Platform License",
    company: "Acme Corporation",
    contactName: "John Doe",
    value: 250000,
    currency: "USD",
    stage: "negotiation",
    probability: 75,
    expectedCloseDate: "2025-12-15",
    owner: "John Sales",
    source: "Referral",
    description: "Annual enterprise license with premium support",
    createdAt: "2025-09-01T08:00:00Z",
    lastUpdated: "2025-11-25T10:30:00Z",
    tags: ["enterprise", "high-value", "hot"]
  },
  {
    id: 2,
    title: "Starter Package - TechStart",
    company: "TechStart",
    contactName: "Sarah Johnson",
    value: 15000,
    currency: "USD",
    stage: "proposal",
    probability: 60,
    expectedCloseDate: "2026-01-20",
    owner: "Sarah Hunter",
    source: "Website",
    description: "Starter package for growing startup",
    createdAt: "2025-10-15T09:15:00Z",
    lastUpdated: "2025-11-27T14:20:00Z",
    tags: ["startup", "warm"]
  },
  {
    id: 3,
    title: "Consulting Services Package",
    company: "Innovate Solutions",
    contactName: "Michael Chen",
    value: 75000,
    currency: "USD",
    stage: "qualification",
    probability: 40,
    expectedCloseDate: "2026-02-28",
    owner: "Mike Johnson",
    source: "Cold Outreach",
    description: "6-month consulting engagement",
    createdAt: "2025-10-20T11:30:00Z",
    lastUpdated: "2025-11-20T16:45:00Z",
    tags: ["consulting", "mid-market"]
  },
  {
    id: 4,
    title: "Sales Training Program",
    company: "Global Sales Inc",
    contactName: "Emily Rodriguez",
    value: 50000,
    currency: "USD",
    stage: "discovery",
    probability: 25,
    expectedCloseDate: "2026-03-31",
    owner: "Emily Davis",
    source: "Conference",
    description: "Comprehensive sales training for 50 reps",
    createdAt: "2025-11-01T13:20:00Z",
    lastUpdated: "2025-11-15T09:00:00Z",
    tags: ["training", "sales"]
  },
  {
    id: 5,
    title: "Manufacturing Integration",
    company: "Enterprise Co",
    contactName: "David Kim",
    value: 500000,
    currency: "USD",
    stage: "closed-lost",
    probability: 0,
    expectedCloseDate: "2025-11-30",
    owner: "David Wilson",
    source: "Partner",
    description: "Large-scale system integration project",
    createdAt: "2025-06-01T10:00:00Z",
    lastUpdated: "2025-10-15T12:00:00Z",
    tags: ["enterprise", "lost", "manufacturing"]
  },
  {
    id: 6,
    title: "Mid-Year Renewal - Acme",
    company: "Acme Corporation",
    contactName: "John Doe",
    value: 300000,
    currency: "USD",
    stage: "closed-won",
    probability: 100,
    expectedCloseDate: "2025-06-30",
    owner: "John Sales",
    source: "Existing Customer",
    description: "Annual renewal with upgrade",
    createdAt: "2025-04-01T08:00:00Z",
    lastUpdated: "2025-06-30T15:00:00Z",
    tags: ["renewal", "closed", "upsell"]
  }
];

module.exports = (req, res) => {
  const { id, stage, company, owner } = req.query;
  
  let filteredDeals = mockDeals;
  
  // Filter by ID if provided
  if (id) {
    const deal = mockDeals.find(d => d.id === parseInt(id));
    return res.status(deal ? 200 : 404).json(
      deal || { error: "Deal not found" }
    );
  }
  
  // Filter by stage
  if (stage) {
    filteredDeals = filteredDeals.filter(d => d.stage === stage);
  }
  
  // Filter by company
  if (company) {
    filteredDeals = filteredDeals.filter(d => 
      d.company.toLowerCase().includes(company.toLowerCase())
    );
  }
  
  // Filter by owner
  if (owner) {
    filteredDeals = filteredDeals.filter(d => 
      d.owner.toLowerCase().includes(owner.toLowerCase())
    );
  }
  
  // Calculate total pipeline value
  const totalValue = filteredDeals.reduce((sum, deal) => sum + deal.value, 0);
  const weightedValue = filteredDeals.reduce((sum, deal) => 
    sum + (deal.value * deal.probability / 100), 0
  );
  
  res.status(200).json({
    total: filteredDeals.length,
    totalValue: totalValue,
    weightedValue: Math.round(weightedValue),
    currency: "USD",
    data: filteredDeals
  });
};


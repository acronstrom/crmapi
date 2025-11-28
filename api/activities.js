const mockActivities = [
  {
    id: 1,
    type: "meeting",
    title: "Q4 Review Meeting",
    description: "Quarterly business review with CEO",
    contactName: "John Doe",
    company: "Acme Corporation",
    assignedTo: "John Sales",
    status: "completed",
    priority: "high",
    scheduledDate: "2025-11-25T10:30:00Z",
    completedDate: "2025-11-25T11:45:00Z",
    duration: 75,
    outcome: "positive",
    notes: "Discussed expansion plans for 2026. They want to add 200 more licenses.",
    createdAt: "2025-11-20T08:00:00Z"
  },
  {
    id: 2,
    type: "call",
    title: "Demo Follow-up Call",
    description: "Follow up on product demo",
    contactName: "Sarah Johnson",
    company: "TechStart",
    assignedTo: "Sarah Hunter",
    status: "completed",
    priority: "medium",
    scheduledDate: "2025-11-27T14:20:00Z",
    completedDate: "2025-11-27T14:45:00Z",
    duration: 25,
    outcome: "positive",
    notes: "They loved the demo. Sending proposal by end of week.",
    createdAt: "2025-11-26T09:00:00Z"
  },
  {
    id: 3,
    type: "email",
    title: "Pricing Information Request",
    description: "Send detailed pricing breakdown",
    contactName: "Michael Chen",
    company: "Innovate Solutions",
    assignedTo: "Mike Johnson",
    status: "pending",
    priority: "medium",
    scheduledDate: "2025-11-29T09:00:00Z",
    completedDate: null,
    duration: null,
    outcome: null,
    notes: "Need to include volume discounts and implementation costs.",
    createdAt: "2025-11-27T16:00:00Z"
  },
  {
    id: 4,
    type: "task",
    title: "Prepare Proposal",
    description: "Create custom proposal for enterprise deal",
    contactName: "John Doe",
    company: "Acme Corporation",
    assignedTo: "John Sales",
    status: "in-progress",
    priority: "high",
    scheduledDate: "2025-11-28T10:00:00Z",
    completedDate: null,
    duration: null,
    outcome: null,
    notes: "Include case studies from similar enterprise clients.",
    createdAt: "2025-11-26T11:00:00Z"
  },
  {
    id: 5,
    type: "meeting",
    title: "Initial Discovery Call",
    description: "First call to understand requirements",
    contactName: "Emily Rodriguez",
    company: "Global Sales Inc",
    assignedTo: "Emily Davis",
    status: "scheduled",
    priority: "medium",
    scheduledDate: "2025-11-30T15:00:00Z",
    completedDate: null,
    duration: 60,
    outcome: null,
    notes: "Prepare questions about their current sales process.",
    createdAt: "2025-11-27T10:00:00Z"
  },
  {
    id: 6,
    type: "call",
    title: "Re-engagement Attempt",
    description: "Try to reconnect with dormant lead",
    contactName: "David Kim",
    company: "Enterprise Co",
    assignedTo: "David Wilson",
    status: "overdue",
    priority: "low",
    scheduledDate: "2025-11-22T14:00:00Z",
    completedDate: null,
    duration: null,
    outcome: null,
    notes: "No response to previous emails. Try calling.",
    createdAt: "2025-11-15T09:00:00Z"
  },
  {
    id: 7,
    type: "demo",
    title: "Product Demo - TechStart",
    description: "Live product demonstration",
    contactName: "Sarah Johnson",
    company: "TechStart",
    assignedTo: "Sarah Hunter",
    status: "completed",
    priority: "high",
    scheduledDate: "2025-11-20T10:00:00Z",
    completedDate: "2025-11-20T11:30:00Z",
    duration: 90,
    outcome: "positive",
    notes: "Demo went excellent. CTO was very impressed with the automation features.",
    createdAt: "2025-11-15T08:00:00Z"
  },
  {
    id: 8,
    type: "task",
    title: "Contract Review",
    description: "Review and finalize contract terms",
    contactName: "John Doe",
    company: "Acme Corporation",
    assignedTo: "John Sales",
    status: "in-progress",
    priority: "urgent",
    scheduledDate: "2025-11-28T16:00:00Z",
    completedDate: null,
    duration: null,
    outcome: null,
    notes: "Legal team reviewing custom terms. Need to finalize by Dec 1.",
    createdAt: "2025-11-27T14:00:00Z"
  }
];

module.exports = (req, res) => {
  const { id, type, status, company, assignedTo } = req.query;
  
  let filteredActivities = mockActivities;
  
  // Filter by ID if provided
  if (id) {
    const activity = mockActivities.find(a => a.id === parseInt(id));
    return res.status(activity ? 200 : 404).json(
      activity || { error: "Activity not found" }
    );
  }
  
  // Filter by type
  if (type) {
    filteredActivities = filteredActivities.filter(a => a.type === type);
  }
  
  // Filter by status
  if (status) {
    filteredActivities = filteredActivities.filter(a => a.status === status);
  }
  
  // Filter by company
  if (company) {
    filteredActivities = filteredActivities.filter(a => 
      a.company.toLowerCase().includes(company.toLowerCase())
    );
  }
  
  // Filter by assignedTo
  if (assignedTo) {
    filteredActivities = filteredActivities.filter(a => 
      a.assignedTo.toLowerCase().includes(assignedTo.toLowerCase())
    );
  }
  
  // Sort by scheduled date (most recent first)
  filteredActivities.sort((a, b) => 
    new Date(b.scheduledDate) - new Date(a.scheduledDate)
  );
  
  res.status(200).json({
    total: filteredActivities.length,
    data: filteredActivities
  });
};


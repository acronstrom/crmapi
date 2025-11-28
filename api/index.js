module.exports = (req, res) => {
  res.status(200).json({
    message: "CRM API is running",
    version: "1.0.0",
    endpoints: {
      contacts: "/api/contacts",
      companies: "/api/companies",
      deals: "/api/deals",
      activities: "/api/activities",
      all: "/api/all"
    },
    documentation: "Visit each endpoint to get mock CRM data"
  });
};


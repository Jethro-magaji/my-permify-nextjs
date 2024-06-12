// Import Permify client
const permify = require('@permify/permify-node');

const client = new permify.grpc.newClient({
  endpoint: "localhost:3478",
});

const checkPermissions = (permissionType) => {
  return async (req, res, next) => {
    try {
     
       // Ensure req.query.userId exists
       if (!req.params.userId) {
        throw new Error('User ID is missing in the request parameters');
      }

      // Convert permissionType to string if necessary
      const permTypeString = String(permissionType);

      // Prepare data for Permify check request
      const checkRes = await client.permission.check({
        tenantId: 't1',
        metadata: {
          schemaVersion: 'cpktk19isfs46jbtvltg',
          snapToken: 'yGm0D9xR2Bc=',
          depth: 20,
        },
        entity: {
          type: 'organization',
          id: "1",
        },
        permission: permTypeString, // Use the converted permissionType
        subject: {
          type: 'user',
          id: req.params.userId,
        },
      });

      if (checkRes.can === 1) {
        // If user is authorized
        res.json({ message: 'You are authorized!' }); // Send JSON response
      } else {
        // If user is not authorized
        res.status(401).json({ message: 'Unauthorized' }); // Send JSON response
      }
    } catch (err) {
      console.error('Error checking permissions:', err.message); 
      res.status(500).json({ error: err.message }); // Send JSON error response 
    }
  };
};

module.exports = checkPermissions;
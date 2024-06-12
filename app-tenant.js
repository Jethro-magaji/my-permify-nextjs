const permify = require('@permify/permify-node');
const client = new permify.grpc.newClient({
    endpoint: 'localhost:3478' // Replace with your Permify server endpoint
});
client.tenancy.create({
  id: 't1', // Unique identifier for your tenant
  name: 'Tenant 1', // Descriptive name for your tenant
}).then((response) => {
  console.log('Tenant created:', response);
});
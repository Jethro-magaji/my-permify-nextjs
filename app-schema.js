const permify = require("@permify/permify-node");

const client = new permify.grpc.newClient({
  endpoint: "localhost:3478", // Use your Permify endpoint
});

const tenantId = "t1"; // Replace with your tenant ID from Permify

async function writeSchema() {
  try {
    const response = await client.schema.write({
      tenantId: tenantId,
      schema: `
      entity user {}
      entity organization {
        relation admin @user
        relation member @user    
        relation manager @user

        permission view_admin = admin
        permission view_manager = manager or admin
        permission view_member = member or manager
      }
    `
    });
    console.log('Schema written:', response);
  } catch (error) {
    console.error("Error writing schema:", error);
  }
}

writeSchema();
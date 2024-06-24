const permify = require("@permify/permify-node");

const client = new permify.grpc.newClient({
    endpoint: "localhost:3478",
})

client.data.write({
    tenantId: "t1",
    metadata: {
        schemaVersion: "cppn74gqhqsuh9t494vg"
    },
    "tuples": [
        {
            "entity": {
                "type": "organization",
                "id": "1"
            },
            "relation": "admin",
            "subject": {
                "type": "user",
                "id": "jack",
            }
        },
        {
            "entity": {
                "type": "organization",
                "id": "1"
            },
            "relation": "member",
            "subject": {
                "type": "user",
                "id": "jane",
            }
        },
        {
            "entity": {
                "type": "organization",
                "id": "1"
            },
            "relation": "manager",
            "subject": {
                "type": "user",
                "id": "john",
            }
        }
    ],
    "attributes": []
}).then((response) => {
    // handle response
    console.log(response)
})

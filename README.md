## A Fullstack Next.js Application with [Permify](https://docs.permify.co/setting-up/installation/intro)

This repository showcases a basic implementation of Role-Based Access Control (RBAC) using [Permify](https://docs.permify.co/setting-up/installation/intro) in a Next.js application with an Express.js backend. It demonstrates how to define roles, permissions, and user relationships in Permify and use them to control access to different parts of the application.

### Project Structure

```
my-permify-nextjs-app/
├── public/
│   └── favicon.ico
├── pages/
│   ├── api
│   │   └── permission.js
│   ├── admin.js
│   ├── error.js
│   ├── index.js
│   ├── manager.js
│   └── member.js
├── next.config.js
├── package.json
├── app-tenant.js
├── app-schema.js
├── app-relationship.js
└── app.js  
```

**File Descriptions:**

* **`pages/`:** Contains all Next.js pages:
    * **`pages/api/`:** Next.js API routes:
        * **`pages/api/permission.js`:** Handles authorization checks using Permify and sends responses to the frontend.
    * **`pages/admin.js`:** Component for the dashboard page, accessible only to admins.
    * **`pages/error.js`:** Component for the error page, shown when unauthorized.
    * **`pages/index.js`:**  Landing page with login buttons for different roles.
    * **`pages/manager.js`:** Component for the manager page, accessible to managers and admins.
    * **`pages/member.js`:** Component for the member page, accessible to members, managers, and admins.
* **`next.config.js`:**  Next.js configuration file.
* **`package.json`:**  Project dependencies.
* **`app-tenant.js`:** Configuration for Permify tenant.
* **`app-schema.js`:**  Defines the Permify schema with entities, roles, and permissions.
* **`app.js`:**  Express.js backend server file handling API routes and authorization logic.

### Getting Started

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Start the Permify Server (Docker):**

    ```bash
    sudo docker run -p 3476:3476 -p 3478:3478 ghcr.io/permify/permify serve
    ```
    or 
    please visit this [link](https://docs.permify.co/setting-up/installation/intro) to set up Permify based on your preference.

3.  **Configure Permify:**
    *   Replace `"your-tenant-id"` with your actual tenant ID.
    *   Run `node app-schema.js` to write the schema to Permify.
    *   Run `node app-permission.js` to grant the `admin` role access to the `organization` entity.

4.  **Start the Backend Server:**

    ```bash
    node app.js
    ```

5.  **Start the Next.js Development Server:**

    ```bash
    npm run dev
    ```

6.  **Access the Application:** Navigate to `http://localhost:3000/` in your browser.

### Usage

*   Enter a User ID in the input field on the `index.js` page.
*   Click the "Login" button for your desired role (Admin, Member, or Manager).
*   The application will send a request to the `permission` API route for authorization.
*   If authorized, you'll be redirected to the corresponding page.
*   If unauthorized, you'll be redirected to the `error` page.

### Key Features

*   **Role-Based Access Control:** Users are assigned roles (admin, manager, member) with different permissions.
*   **Permify Integration:**  Uses the `@permify/permify-node` and `@permify/react-role` libraries to implement authorization checks.
*   **Next.js Routing:**  Handles client-side routing using `next/router`.
*   **Express.js Backend:** Provides API routes for authorization checks.
*   **Tailwind CSS:**  Uses Tailwind CSS for styling the frontend pages.

### Notes

*   **Authentication:**  This example uses simulated user data and authentication for demonstration purposes.  Replace it with your actual authentication system.
*   **API Routes:** You will likely need to implement more robust API routes to handle user data, authorization, and other application logic.

### Contributing

Contributions are welcome!  Feel free to submit pull requests for bug fixes, feature enhancements, or documentation improvements.

### License

This project is licensed under the MIT License.
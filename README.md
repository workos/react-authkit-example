#  authkit-react example

An example application demonstrating how to authenticate users with AuthKit's React SDK.

## Prerequisites

You will need a [WorkOS account](https://dashboard.workos.com/signup).

## Running the example

1. In the [WorkOS dashboard](https://dashboard.workos.com), head to the Redirects tab and create a [sign-in callback redirect](https://workos.com/docs/user-management/1-configure-your-project/configure-a-redirect-uri) for `http://localhost:5173`.

3. Navigate to the "Authentication" page in the left-hand navigation sidebar. Under the "Authentication" section, click on "Sessions". On the "Sessions" page, scroll down to find the "Cross-Origin Resource Sharing (CORS)" card and click the "Manage" button. Add `http://localhost:5173` to the list of allowed web origins. Click "Save."

4. Navigate to the "Overview" page on the left-hand sidebar and copy the Client ID. Rename the `.env.local.example` file to `.env.local` and supply your Client ID.

7. Run the following command and navigate to [http://localhost:5173](http://localhost:5173).

   ```bash
   npm run dev
   ```

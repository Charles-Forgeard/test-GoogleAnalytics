# GA4 API tests

This project is about perform request to GA4 API and provide custom datas with a private API.

It's a feasibility study and should not be used in production.

## Step 1. Publish test webpage

Use GitHub pages to publish the test page. You have to select main branch and /docs folder while you are setting branch with github pages.

## Step 2. Connect test webpage to your GA4 property

Got to [your GA4 dashboard](https://analytics.google.com/), click on Administration button (bottom left). Got to "data flow" on property column and click on "add flow" and select "Web". Follow steps by using your GitHub pages test webpage adress. Final step will ask about integration instructions. 
Choose manual intégration and paste this code instead of similar code into index.html file.

When test webpage will be updated, you should visit it a few times in order to create some GA4 datas.

## Step 3. Enable the API

Go to [Google Analytics Data API documentation](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries?hl=en) and perform step 1. 
You must place your credentials.json file in /google_analytics folder and change filename from "credentials.json" to "GA-credentials.json".

## Step 4. Get GA4 property ID

Got to [your GA4 dashboard](https://analytics.google.com/), click on Administration button. Copy your propertyID (numbers following your account name, on the top of property column) and paste it as propertyID value into .env.example file and rename file from ".env.example" to ".env".

## Step 5. Run API

In a terminal, go inside API folder and use:
git add
- pnpm run install

to install dependencies 

- pnpm run start

to run the server and provide API

## Step 6. Get GA4 datas

Use your browser and go to localhost:3000/datas. GA4 datas will be displayed.

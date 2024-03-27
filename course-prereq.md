# Course pre-requisites

## Atlassian cloud developer site

An Atlassian cloud developer site lets you install and test your app on Confluence and Jira products set up for you. If you don't have one yet, set it up now:

Go to http://go.atlassian.com/cloud-dev and create a site using the email address associated with your Atlassian account.
Once your site is ready, log in and complete the setup wizard.
You can install your app to multiple Atlassian sites. However, app data won't be shared between separate Atlassian sites, products, or Forge environments.

## Forge CLI and Node

The Forge CLI requires an actively supported version of Node LTS to be installed. For the purposes of this course, we will be using **Node v18** as it matches the version used by the [Forge runtime environment](https://developer.atlassian.com/platform/forge/runtime-reference/). It is usually good practice to manage different versions of Node using a version manager such as `nvm`.

Refer to the official [get started guide](https://developer.atlassian.com/platform/forge/getting-started/) if you prefer a more OS-specific installation.

Skip to **step 3** if you already have a Node v18 installed.

1. Install [nvm](https://github.com/nvm-sh/nvm)

2. Install the latest Node LTS release and set it as the default version

   ```shell
   nvm install 18 && nvm alias default 18*
   ```

3. Install the Forge CLI globally

   ```shell
   npm install -g @forge/cli
   ```

4. Verify the installation

   ```shell
   forge --version
   ```

5. You can update existing installations at any time using

   ```shell
   npm update -g @forge/cli
   ```

6. Create or use an existing Atlassian API token to authenticate with Atlassian via the Forge CLI.

   a. Go to https://id.atlassian.com/manage/api-tokens.

   b. Click `Create API token`.

   c. Enter a label to describe your API token. For example, `forge-api-token`.

   d. Click `Create`.

   e. Click `Copy` to clipboard and close the dialog.

7. Log in to the Forge CLI to start using Forge commands

   a. Start the process by running:

   ```shell
   forge login
   ```

   b. You'll be asked whether to allow Forge to collect usage analytics data:

   ```shell
   Allow Forge to collect CLI usage and error reporting information?
   ```

   Answering `Yes` will allow Forge to collect data about your app's deployments and installations (including error data).

   c. Enter the email address associated with your Atlassian account.

   d. Enter your Atlassian API token (step 6).

8. You will see a message similar to this confirming you are logged in:

   ```shell
   ✔ Logged in as John Smith
   ```

## ngrok

Sign up for a free ngrok account and install the ngrok agent in order to run your Forge app locally from your machine (explained more in future sections).

1. Sign up for an ngrok account: https://ngrok.com/

2. Install the ngrok agent onto your machine: https://dashboard.ngrok.com/get-started/setup

3. Authenticate your ngrok agent using an authtoken: https://dashboard.ngrok.com/get-started/your-authtoken

## Quick start

- Register the app by running:

```
forge register
```

- Configure the app to use the Native Node.js runtime by editing `manifest.yml`:

```yaml
app:
  id: ari:cloud:ecosystem::app/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  runtime:
    name: nodejs18.x
```

- Build and deploy your app by running:

```
forge deploy
```

- Install your app in an Atlassian site by running:

```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:

```
forge tunnel
```

### Notes

- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

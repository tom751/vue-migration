# Description

Nginx reverse proxy that serves a Vue 2 and Vue 3 app. Specific routes should direct to the Vue 3 app and vice versa.

# Run

```sh
docker-compose up
```

Now visit `http://localhost` - the /about page should render the vue 3 app.

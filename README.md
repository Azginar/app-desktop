## instructions

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000 - localhost development
$ npm run dev

# run on the server (pm2 required)
$ pm2 start ecosystem.config.js

you need alias web site domain to 3001 http port


```
for some dev in safari add this 
```
nuxt.config.js
{
  build: {
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*'
      }
    }
  }
}
```



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

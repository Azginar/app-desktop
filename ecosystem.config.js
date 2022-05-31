module.exports = {
  apps: [
    {
      name: 'NuxtAppNameBlackRedDesktop',
      port: 3001,
      exec_mode: 'cluster',
      instances: 1, // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      cwd: '/var/www/socialnuxtappblacreddesktop',
      args: 'start'
    }
  ]
}

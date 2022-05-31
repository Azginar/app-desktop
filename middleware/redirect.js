/**
 * this middleware using for redirect user:
 * we are not view to user  desktop version of the web trader cabinet if user come from mobile
 * and in reverse - if user come from desktop not to view mobile
 * @param context - nuxtjs context object
 */
export default function (context) {
  if (process.client) {
    const { redirect } = context
    if (isMobile(navigator.userAgent)) {
      // todo this variables must be from env files
      redirect('https://mdev.tifia.com')
    }
  }
  if (process.server) {
    const { req, redirect } = context
    if (isMobile(req.headers['user-agent'])) {
      // todo this variables must be from env files
      redirect('https://mdev.tifia.com')
    }
  }
}

function isMobile (userAgent) {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(userAgent))
}

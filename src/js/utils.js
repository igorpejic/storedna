import { sections } from './data/footer.json'

export const BLOG_URL = 'https://blog.storedna.co'

export const getAwsSendEmailUrl = () => {
  const awsEndpoint = 'aHR0cHM6Ly9lbmQ5enR1djlqLmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2RlZmF1bHQvU2VuZEVtYWlsU3RvcmVkbmE='
  //
  return atob(awsEndpoint)
}

export const sendEmail = (email, kind) => {
  return fetch(getAwsSendEmailUrl(), {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({"email": email, "kind": kind})
  }).then(response => {
    return response
  })
}

export const getFooterItem = (matchHref) =>
  sections.reduce((a,b) => a.concat(b.tabs), [])
          .filter((tab) => tab.href === matchHref)[0]

import { sections } from './data/footer.json'

export const BLOG_URL = 'https://blog.storedna.co'
export const S3_BUCKET_URL = 'https://storedna.co'

export const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

export const getAwsSendEmailUrl = () => {
  const awsEndpoint = 'aHR0cHM6Ly9lbmQ5enR1djlqLmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2RlZmF1bHQvU2VuZEVtYWlsU3RvcmVkbmE='
  return atob(awsEndpoint)
}

export const sendEmail = (email, kind) => {
  return fetch(getAwsSendEmailUrl(), {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({"email": email, "kind": kind})
  }).then(response => {
    return response
  }).catch(err => console.error(err.message))
}

export const getFooterItem = (matchHref) =>
  sections.reduce((a,b) => a.concat(b.tabs), [])
          .filter((tab) => tab.href === matchHref)[0]

export const autoplayVideoIniOS = (video) => {
  if (iOS) {
    video.loop = true;
    video.play();
  }
}

export const isMobile = () => {
  console.log(window.innerWidth)
  if (window) {
    return window.innerWidth < 700;
  }
}

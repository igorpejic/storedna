import { sections } from './data/footer.json'

export const playLazyVideos = () => {
  const lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((video) => {
        if (video.isIntersecting) {
          video.target.play()
            .then(_ => video.target.classList.add("loaded"))
            .catch();
        } else if (video.target.classList.contains("loaded")){
          video.target.pause();
        }
      });
    });

    lazyVideos.forEach((video) => {
      lazyVideoObserver.observe(video);
    });
  } else { // IntersectionObserver api does not work in Safari
    lazyVideos.forEach((video) => {
      document.addEventListener('scroll', () => {
        const rect = video.getBoundingClientRect();
        console.log(video, rect)
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          video.play()
            .then(_ => video.classList.add("loaded"))
            .catch();
        } else if (video.classList.contains("loaded")){
          video.pause();
        }
      })
    })
  }
}

export const BLOG_URL = 'https://blog.monolith.co'

export const getAwsSendEmailUrl = () => {
  return atob('aHR0cHM6Ly9lbmQ5enR1djlqLmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2RlZmF1bHQvU2VuZEVtYWlsU3RvcmVkbmE=')
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

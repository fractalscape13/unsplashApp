const accessKey = 'gf3IG1yj6BI-M3aO31DkrQc4IfmKAqspsEUx7WF9sDg'
const secretKey = 'STFwPVqiT1i8JXx4ZbcTevuwXqD8kQiEifdzealtKec'
const redirectUri = 'urn:ietf:wg:oauth:2.0:oob'

export const getPhotos = async (searchTerm, pageNumber, orientationFilter, colorFilter) => {
  let targetUrl = 'https://api.unsplash.com/search/photos?client_id=' + accessKey + '&query=' + searchTerm + '&page=' + pageNumber
  if (orientationFilter) {
    targetUrl = targetUrl + '&orientation=' + orientationFilter
  }
  if (colorFilter) {
    targetUrl = targetUrl + '&color=' + colorFilter
  }
  return fetch(targetUrl)
  .then(response => response.json())
  .catch(error => console.log('error', error))
};

export const downloadPhoto = async (url) => {
  return fetch(url + '&client_id=' + accessKey)
    .then(response => response.json())
    .catch(error => console.log('error', error))
};

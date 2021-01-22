export default function authHeader(extra) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else if (user && user.accessToken && extra) {
    return {
      Authorization: 'Bearer ' + user.accessToken,
      'content-type': 'application/json',
    };
  } else {
    return {};
  }
}

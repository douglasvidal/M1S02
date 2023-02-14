export function userAuthentication(user) {
  return (
    localStorage.getItem("user") === user.username &&
    localStorage.getItem("password") === user.password
  );
}

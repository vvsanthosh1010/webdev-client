export default function TernaryOperator() {
  let loggedIn = true;
  // On your own
  const hour = 9;
  // With AI
  const premium = false;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
      {premium ? <p id="wd-ai-premium">Premium</p> : <p id="wd-ai-free">Free</p>}
      <hr />
    </div>
  );
}

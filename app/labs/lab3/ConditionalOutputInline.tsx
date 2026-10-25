export default function ConditionalOutputInline() {
  const loggedIn = false;
  // On your own
  const guest = true;
  // With AI
  const admin = true;
  return (
    <div id="wd-conditional-output-inline">
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
      {guest && <h2>Guest Inline</h2>}
      {admin && <h2 id="wd-ai-admin-inline">Admin Inline</h2>}
    </div>
  );
}

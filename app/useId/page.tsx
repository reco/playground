import { useId } from "react";
import Link from "next/link";

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export default function Page() {
  return (
    <>
      <h1>useId</h1>
      <h2>hook</h2>

      <p className="lh125 my3">
        For generating unique IDs that can be passed to accessibility
        attributes. <br />
        <Link href={"https://beta.reactjs.org/apis/react/useId"}>Docs</Link>
      </p>

      <PasswordField />
      <PasswordField />
      <PasswordField />
    </>
  );
}

import { useId } from "react";
import Link from "next/link";

import { SearchInput } from "@/components/SearchInput";

function PasswordField() {
  const passwordHintId = useId();
  return (
    <div className="my-4">
      <label>
        Password:
        <input
          className="form-input"
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <h1>useId</h1>
      <h2>hook</h2>

      <p className="my-3 lh125">
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

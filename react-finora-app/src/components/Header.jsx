
import { Show, UserButton, SignInButton, SignUpButton } from '@clerk/react';

export default function Header() {
  return (
    <header>
      <Show when="signed-in">
        <UserButton afterSignOutUrl="/" />
      </Show>

      <Show when="signed-out">
        <SignInButton mode="modal">Sign in</SignInButton>
        <SignUpButton mode="modal">Sign up</SignUpButton>
      </Show>
    </header>
  );
}

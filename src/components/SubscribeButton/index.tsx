import { useSession, signIn } from "next-auth/client";
import styles from "./styles.module.scss";

interface SubscriptionButtonProps {
  priceId: string;
}

export function SubscriptionButton({ priceId }: SubscriptionButtonProps) {
  const [session] = useSession()

  function handleSubscribe() {
    if(!session){
      signIn('github')
      return;
    }
    //criação da checkout session
  }
  return (
    <button
      type="button"
      className={styles.subscriptionButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}

import styles from "./styles.module.scss";

interface SubscriptionButtonProps {
  priceId: string;
}

export function SubscriptionButton({ priceId }: SubscriptionButtonProps) {
  return (
    <button type="button" className={styles.subscriptionButton}>
      Subscribe now
    </button>
  );
}

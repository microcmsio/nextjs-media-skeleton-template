import styles from './index.module.css';

export default function Sub({ children }: { children: React.ReactNode }) {
  return <div className={styles.sub}>{children}</div>;
}

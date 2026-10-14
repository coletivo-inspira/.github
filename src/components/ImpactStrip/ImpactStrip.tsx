import { impactMetrics } from "@/data/hub";
import styles from "./ImpactStrip.module.css";

export function ImpactStrip() {
  return (
    <section className={styles.strip} aria-labelledby="impact-title">
      <h2 id="impact-title" className="sr-only">
        O Coletivo Inspira em números
      </h2>
      <div className={styles.inner}>
        {impactMetrics.map((metric) => (
          <div className={styles.metric} key={metric.label}>
            <strong>{metric.value}</strong>
            <span>
              <b>{metric.label}</b>
              {metric.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

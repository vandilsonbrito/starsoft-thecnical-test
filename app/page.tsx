import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header/>
      <section className={styles.pageSection}>
          <div className={styles.productsWrapper}>
            <ProductContainer/>
          </div>
      </section>
      <Footer/>
    </main>
  );
}

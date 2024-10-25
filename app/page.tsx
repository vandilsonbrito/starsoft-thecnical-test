import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.page}>
          <div className={styles.productsWrapper}>
            <ProductContainer/>
          </div>
      </main>
      <Footer/>
    </>
  );
}

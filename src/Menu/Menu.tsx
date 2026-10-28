import styles from "./Menu.module.css";
import beefPelmeni from "../assets/beef pelmeni.jpg";
import cheburekWithMeat from '../assets/cheburek with meat.jpg';
// import cheburekiWithCheese from '../assets/chebureki with cheese.jpg';
// import varenikiWithCherry from '../assets/vareniki with cherry.jpg';
// import varenikiWithCottageCheese from '../assets/vareniki with cottage cheese.jpg';
// import varenikiWithPotAndMushrooms from '../assets/vareniki with poato and mushrooms.jpg';
// import varenikiWithPotAndCheese from '../assets/vareniki with potato and cottage cheese.jpg';
// import varenikiWithPotato from '../assets/vareniki with potato.jpg';
// import varenikiWithSaltedCheese from '../assets/vareniki with salted cottage cheese.jpg';

type Product = {
  name: string;
  price: string;
  ingredients: string;
  cooking: string;
  serving: string;
  storage: string;
  image: string;
};

const products: Product[] = [
  {
    name: "BEEF PELMENI",
    price: "AED 65.00",
    ingredients:
      "Beef mince (halal), onion, parsley, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place the pelmeni into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: beefPelmeni,
  },
    {
    name: "CHEBUREKI WITH MEAT",
    price: "AED 70.00",
    ingredients:
      "Beef mince (halal), onion, parsley, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place the pelmeni into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: cheburekWithMeat,  
  },
  {
       name: "CHEBUREKI WITH MEAT",
    price: "AED 70.00",
    ingredients:
      "Beef mince (halal), onion, parsley, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place the pelmeni into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: cheburekWithMeat,  
  },
    {
       name: "CHEBUREKI WITH MEAT",
    price: "AED 70.00",
    ingredients:
      "Beef mince (halal), onion, parsley, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place the pelmeni into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: cheburekWithMeat,  
    }
];

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <p className={styles.eyebrow}>Our menu</p>
      <h2 className={styles.title}>Choose your favourites</h2>

      <div className={styles.products}>
        {products.map((product) => (
          <article className={styles.card} key={product.name}>
            <img
              className={styles.photo}
              src={product.image}
              alt={product.name}
              loading="lazy"
            />

            <div className={styles.details}>
              <div className={styles.productHeading}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
              </div>

              <p className={styles.ingredients}>
                <strong>Ingredients:</strong> {product.ingredients}
              </p>

              <details className={styles.moreInfo}>
                <summary>Cooking, serving & storage</summary>

                <p>
                  <strong>Cooking:</strong> {product.cooking}
                </p>
                <p>
                  <strong>Serving:</strong> {product.serving}
                </p>
                <p>
                  <strong>Storage:</strong> {product.storage}
                </p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
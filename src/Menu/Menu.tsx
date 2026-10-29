import styles from "./Menu.module.css";
import beefPelmeni from "../assets/beef pelmeni.jpg";
import cheburekWithMeat from '../assets/cheburek with meat.jpg';
import cheburekiWithCheese from '../assets/chebureki with cheese.jpg';
import varenikiWithCherry from '../assets/vareniki with cherry.jpg';
import varenikiWithCottageCheese from '../assets/vareniki with cottage cheese.jpg';
import varenikiWithPotAndMushrooms from '../assets/vareniki with poato and mushrooms.jpg';
import varenikiWithPotAndCheese from '../assets/vareniki with potato and cottage cheese.jpg';
import varenikiWithPotato from '../assets/vareniki with potato.jpg';
import varenikiWithSaltedCheese from '../assets/vareniki with salted cottage cheese.jpg';
import varenikiWithBlackcurrant from '../assets/blackcurrunt varenuki.jpeg';
import varenikiWithCabbage from '../assets/cabage.jpeg';
import chickenPelmeni from '../assets/about.jpg';

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
    name: "Beef Pelmeni",
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
    name: "Chebureki With Meat",
    price: "AED 70.00",
    ingredients:
      "Beef mince (halal), onion, parsley, salt, black pepper, dough.",
    cooking:
      "Put gently in the hot oil on the pan and fry from both sides",
    serving:
      "Serve hot",
    storage: "Keep frozen for up to 3 months.",
    image: cheburekWithMeat,  
  },
  {
    name: "Vareniki With Black Currant (sweet)",
    price: "AED 60.00",
    ingredients:
      "Black currant, sugar, dough",
    cooking:
      "Bring water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving: "For a soft taste add a little sugar. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithBlackcurrant,  
  },
    {
    name: "Vareniki With Cherry (sweet)",
    price: "AED 60.00",
    ingredients:
      "Cherry, sugar, dough",
    cooking:
      "Bring water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving: "For a soft taste add a little sugar. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithCherry,  
  },
      {
    name: "Vareniki With Cottage Cheese (sweet)",
    price: "AED 60.00",
    ingredients:
      "Cottage cheese, sugar, vanilla, dough",
    cooking:
      "Bring water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving: "For a soft taste add a little sugar. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithCottageCheese,  
  },
  {
    name: "Vareniki With Salted Cottage Cheese",
    price: "AED 50.00",
    ingredients: "Cottage cheese, salt, pepper, dough",
    cooking: "Bring salted water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving: "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithSaltedCheese,  
  },
    {
    name: "Chebureki With Cheese",
    price: "AED 60.00",
    ingredients:
      "Mozarella cheese, feta cheese, parsley, dough.",
    cooking:
      "Put gently in the hot oil on the pan and fry from both sides",
    serving:
      "Serve hot",
    storage: "Keep frozen for up to 3 months.",
    image: cheburekiWithCheese,  
  },
      {
    name: "Vareniki With Potato",
    price: "AED 45.00",
    ingredients:
      "Potato, onion, dill, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithPotato,
  },
  {
    name: "Vareniki With Cabbage",
    price: "AED 45.00",
    ingredients:
      "Cabbage, carrot, onion, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithCabbage,
  },    
  {
    name: "Vareniki With Potato And Cottage Cheese",
    price: "AED 55.00",
    ingredients:
      "Potato, cottage cheese, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithPotAndCheese,
  },  
    {
    name: "Vareniki With Potato And Mashrooms",
    price: "AED 50.00",
    ingredients:
      "Potato, onion, mashrooms, dill, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place vareniki into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: varenikiWithPotAndMushrooms,
  },
     {
    name: "Chicken Pelmeni",
    price: "AED 55.00",
    ingredients:
      "Chicken mince (halal), white onion, dill, salt, black pepper, dough.",
    cooking:
      "Bring salted water to a boil. Gently place the pelmeni into the water and cook for 5–6 minutes. Stir gently once or twice to prevent sticking.",
    serving:
      "For a soft, buttery taste, add a little butter and a pinch of black pepper. Serve with sour cream on the side.",
    storage: "Keep frozen for up to 3 months.",
    image: chickenPelmeni,
  }, 
];

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <p className={styles.eyebrow}>Our menu</p>

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
      <a
  href="https://wa.me/971502090981"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.orderButton}
>
  Place An Order
</a>
    </section>
  );
}
import type { Tag, Category, Product } from '../../assets/@types';
import Products from './Products';

type ProductsAddFormProps = {
  products: Product[];
  categories: Category[];
  tags: Tag[];
  displayModal: boolean;
  addRental: (newproduct: Product) => void;
};

function ProductAddForm({
  categories,
  tags,
  displayModal,
  products,
  addRental,
}: ProductsAddFormProps) {
  function handleSubmitAddProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));

    const categorySelected = categories.find(
      (categorie) => categorie.title === data.categorie,
    );

    if (!categorySelected) {
      //todo gérer un message si pas catégorie
      return;
    }
    console.log(categorySelected);
    //On vérifie le tag si renseigné, sinon tag = 0
    const tagSelected = tags.find((tag) => tag.text === data.tag) || { id: 0 };
    if (!tagSelected) {
      return;
    }
    console.log(Products);
    const newProduct = {
      id: products.length + 1,
      title: `${data.titre}`,
      price: Number(`${data.price}`),
      image: `${data.url}`,
      category: categorySelected as Category,
      tag: tagSelected as Tag,
    };
    console.log(newProduct);

    addRental(newProduct);
  }

  return (
    <div>
      {displayModal && (
        <form onSubmit={handleSubmitAddProduct} action="">
          <h3 className="bg-Main_low p-3">Ajouter un produit</h3>
          <label htmlFor="titre">Titre</label>
          <input className="bg-Main_medium" type="text" name="titre" required />

          <label htmlFor="url">URL de la photo</label>
          <input className="bg-Main_medium" type="text" name="url" required />

          <label htmlFor="price">Prix (en euros)</label>
          <input
            placeholder="90.99"
            className="bg-Main_medium"
            type="text"
            name="price"
          />
          <select name="categorie" id="" required>
            <option value="">Choisissez une catégorie</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.title}>
                {categorie.title}
              </option>
            ))}
          </select>

          <select name="tag" id="">
            <option value="">Choisissez un tag</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.text}>
                {tag.text}
              </option>
            ))}
          </select>
          <button type="submit">Ajouter</button>
        </form>
      )}
    </div>
  );
}

export default ProductAddForm;

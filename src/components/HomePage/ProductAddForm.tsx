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
    <div className="col-span-4">
      {displayModal && (
        <form
          className="grid grid-cols-2"
          onSubmit={handleSubmitAddProduct}
          action=""
        >
          <div className="bg-Main_low p-3 col-span-2 grid grid-cols-2">
            <h3 className="">Ajouter un produit</h3>
            <div className="justify-self-end">
              <img src="../../../icons/icons8-close.svg" alt="close button" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="titre">Titre</label>
            <input
              className="bg-Main_medium"
              type="text"
              name="titre"
              required
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="url">URL de la photo</label>
            <input className="bg-Main_medium" type="text" name="url" required />
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="price">Prix (en euros)</label>
            <input
              placeholder="90.99"
              className="bg-Main_medium"
              type="text"
              name="price"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="categorie">Catégorie</label>
            <select name="categorie" id="" required>
              <option value="">Choisissez une catégorie</option>
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.title}>
                  {categorie.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="tag">Tag</label>
            <select name="tag" id="">
              <option value="">Choisissez un tag</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.text}>
                  {tag.text}
                </option>
              ))}
            </select>
          </div>

          <button className="bg-Brand_primary col-span-2" type="submit">
            Ajouter
          </button>
        </form>
      )}
    </div>
  );
}

export default ProductAddForm;

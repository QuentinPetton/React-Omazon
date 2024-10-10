import type { Tag, Category, Product } from '../../assets/@types';

type ProductsAddFormProps = {
  categories: Category[];
  tags: Tag[];
  displayModal: boolean;
  addRental: (addproduct: Product) => void;
};

function ProductAddForm({
  categories,
  tags,
  displayModal,
  addRental,
}: ProductsAddFormProps) {
  function handleSubmitAddProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log(data);
    console.log(data.Tag);
    console.log(data.titre);

    const newProduct = {
      title: data.titre,
      price: data.price,
      image: data.url,
      category: data.categorie,
      tag: data.tag,
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
          <input className="bg-Main_medium" type="text" name="titre" />

          <label htmlFor="url">URL de la photo</label>
          <input className="bg-Main_medium" type="text" name="url" />

          <label htmlFor="price">Prix (en euros)</label>
          <input
            placeholder="90.99"
            className="bg-Main_medium"
            type="text"
            name="price"
          />
          <select name="categorie" id="">
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

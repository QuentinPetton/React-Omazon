import type { Tag, Category } from '../../assets/@types';

type ProductsAddFormProps = {
  categories: Category[];
  tags: Tag[];
  displayModal: boolean;
};

function ProductAddForm({
  categories,
  tags,
  displayModal,
}: ProductsAddFormProps) {
  return (
    <div>
      {displayModal && (
        <form action="">
          <h3>Ajouter un produit</h3>
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
          <select name="Catégorie" id="">
            <option value="">Choisissez une catégorie</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.title}>
                {categorie.title}
              </option>
            ))}
          </select>

          <select name="Tag" id="">
            <option value="">Choisissez un tag</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.text}>
                {tag.text}
              </option>
            ))}
          </select>
        </form>
      )}
    </div>
  );
}

export default ProductAddForm;

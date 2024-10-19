import type { Tag, Category, Product } from '../../assets/@types';
import Products from './Products';

type ProductsAddFormProps = {
  products: Product[];
  categories: Category[];
  tags: Tag[];
  displayModal: boolean;
  addRental: (newproduct: Product) => void;
  displayModalAddForm: () => void;
};

function ProductAddForm({
  categories,
  tags,
  displayModal,
  products,
  addRental,
  displayModalAddForm,
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
      description: `${data.description}`,
      image: `${data.url}`,
      categoryId: categorySelected.id,
      tagId: tagSelected.id,
    };
    console.log(newProduct);

    addRental(newProduct);
    displayModalAddForm();
  }

  return (
    <div>
      {displayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay semi-transparent */}
          <div className="fixed inset-0 bg-black opacity-50 z-40" />

          {/* Contenu de la modale */}
          <div className="relative z-50 col-span-4 w-3/4 justify-self-center">
            <form
              className="grid grid-cols-2 gap-2 rounded-md bg-white shadow-lg"
              onSubmit={handleSubmitAddProduct}
              action=""
            >
              <div className="bg-Main_low p-5 col-span-2 grid grid-cols-2 rounded-t-md border-b border-Brand_grey">
                <h3 className="font-bold">Ajouter un produit</h3>
                <div className="justify-self-end">
                  <button onClick={displayModalAddForm} type="button">
                    <img
                      className="w-6"
                      src="../../../icons/icons8-close.svg"
                      alt="close button"
                    />
                  </button>
                </div>
              </div>

              <div className="col-span-2 flex flex-col px-6 pt-6">
                <label htmlFor="titre">Titre</label>
                <input
                  className="border border-Brand_grey rounded-sm px-2 py-1"
                  type="text"
                  name="titre"
                  required
                />
              </div>

              <div className="col-span-2 flex flex-col px-6">
                <label htmlFor="url">URL de la photo</label>
                <input
                  className="border border-Brand_grey rounded-sm px-2 py-1"
                  type="text"
                  name="url"
                  required
                />
              </div>

              <div className="col-span-2 flex flex-col px-6">
                <label htmlFor="price">Prix (en euros)</label>
                <input
                  placeholder="90.99"
                  className="border border-Brand_grey rounded-sm px-2 py-1"
                  type="text"
                  name="price"
                />
              </div>

              <div className="col-span-2 flex flex-col px-6">
                <label htmlFor="description">Description</label>
                <textarea
                  className="border border-Brand_grey rounded-sm px-2 py-1"
                  name="description"
                  rows={4}
                  required
                />
              </div>

              <div className="flex flex-col gap-1 px-6">
                <label htmlFor="categorie">Catégorie</label>
                <select
                  className="border border-Brand_grey rounded-sm bg-Main_Lowest px-2 py-1"
                  name="categorie"
                  id=""
                  required
                >
                  <option value="">Choisissez une catégorie...</option>
                  {categories.map((categorie) => (
                    <option key={categorie.id} value={categorie.title}>
                      {categorie.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1 px-6">
                <label htmlFor="tag">Tag</label>
                <select
                  className="border border-Brand_grey rounded-sm bg-Main_Lowest px-2 py-1"
                  name="tag"
                  id=""
                >
                  <option value="">Choisissez un tag</option>
                  {tags.map((tag) => (
                    <option key={tag.id} value={tag.text}>
                      {tag.text}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="bg-Button_primary_default_bg border-Button_primary_default_border col-span-2 p-2 rounded-lg mt-2 mx-4 mb-8"
                type="submit"
              >
                Ajouter
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductAddForm;

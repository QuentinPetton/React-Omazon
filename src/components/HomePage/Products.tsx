import type { Product, Tag, Category } from '../../assets/@types';
import ProductAddForm from './ProductAddForm';

type ProductsListProps = {
  products: Product[];
  categories: Category[];
  tags: Tag[];
  displayModal: boolean;
  addProductToCart: (product: Product) => void;
  addRental: (addproduct: Product) => void;
};

function Products({
  products,
  addProductToCart,
  categories,
  tags,
  displayModal,
  addRental,
}: ProductsListProps) {
  //Gérer l'affichage du tag : affichage conditionnel et avec style suivant tag.id

  const getTagTypeAndStyle = (tag: Tag) => {
    if (tag.id === 1) {
      return (
        <span className="rounded-tl-lg top-0 left-0 pl-4 pr-10 py-1 bg-Main_high text-sm text-Main_Lowest [clip-path:polygon(0%_0%,_100%_0%,_81%_100%,_0%_100%)]">
          Choix <span className="text-Brand_primary">d'Omazon</span>
        </span>
      );
    }
    if (tag.id === 2) {
      return (
        <span className="rounded-tl-lg top-0 left-0 pl-4 pr-10 py-1 bg-Brand_grey text-sm text-Main_Lowest [clip-path:polygon(0%_0%,_100%_0%,_81%_100%,_0%_100%)]">
          Nouveauté
        </span>
      );
    }
    if (tag.id === 3) {
      return (
        <span className="rounded-tl-lg top-0 left-0 pl-4 pr-10 py-1 bg-Brand_primary text-sm text-Main_Lowest [clip-path:polygon(0%_0%,_100%_0%,_81%_100%,_0%_100%)]">
          N°1 des ventes
        </span>
      );
    }
    if (tag.id === 4) {
      return (
        <span className="rounded-tl-lg top-0 left-0 pl-4 pr-10 py-1 bg-Danger_medium text-sm text-Main_Lowest [clip-path:polygon(0%_0%,_100%_0%,_81%_100%,_0%_100%)]">
          Vente flash
        </span>
      );
    }

    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
      <h1 className="px-4 pt-10 font-bold text-3xl md:col-span-2 lg:col-span-4">
        Tous nos produits
      </h1>
      {products.map((product) => (
        <article
          key={product.id}
          className=" border-Main_low h-full flex flex-col"
        >
          <div className="relative pb-6 flex-grow">
            {getTagTypeAndStyle(product.tag)}

            <img
              className="w-1/2 object-cover mx-auto pt-6 "
              src={`../src/assets/products/${product.image}`}
              alt={product.title}
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.04)] " />
          </div>

          <div className="border-r border-b border-l border-Main_low p-4">
            <p className="line-clamp-3">{product.title}</p>
            <div className="flex items-center gap-1 mt-10 mb-4">
              <span className="font-bold text-3xl">
                {Math.trunc(product.price)}
              </span>
              <sup className="font-normal text-xs  ">
                {product.price.toString().split('.')[1]} €
              </sup>
            </div>

            <button
              onClick={() => addProductToCart(product)}
              className="p-2 px-4 bg-Button_primary_default_bg rounded-3xl text-xs border-2 border-Button_primary_default_border
        "
              type="button"
            >
              Ajouter au panier
            </button>
          </div>
        </article>
      ))}
      <ProductAddForm
        products={products}
        categories={categories}
        tags={tags}
        displayModal={displayModal}
        addRental={addRental}
      />
    </div>
  );
}

export default Products;

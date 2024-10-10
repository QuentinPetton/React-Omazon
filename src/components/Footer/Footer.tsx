import type { Category, Product } from '../../assets/@types';

type FooterProps = {
  categories: Category[];
  products: Product[];
  displayModalAddForm: () => void;
};

function Footer({ categories, products, displayModalAddForm }: FooterProps) {
  return (
    <div>
      <div className=" hidden md:flex lg:flex justify-between items-center bg-Main_high text-Main_Lowest p-4 gap-8">
        <div className="w-32">
          <img src="/logos/omazon.svg" alt="Omazon Logo" />
        </div>
        <form className="flex justify-center w-full  " action="">
          <select
            name="Toutes nos catégories"
            id="categories-select"
            className="hidden rounded-l-md p-2 text-Brand_grey border-r border-Brand_grey md:block  lg:block"
          >
            <option value="">Toutes nos catégories</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.title}>
                {categorie.title}
              </option>
            ))}
          </select>
          <input
            className="rounded-l-md p-2 w-full text-Brand_grey md:rounded-l-none lg:rounded-l-none"
            type="text"
            placeholder="Rechercher Omazon"
          />
          <button
            type="button"
            className="p-2 px-4 bg-Brand_primary rounded-r-md"
          >
            <img src="/icons/search.svg" alt="Search icon" />
          </button>
        </form>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="text-Brand_primary font-bold absolute -top-2 right-1  h-5 w-5 flex items-center justify-center">
              0
            </span>
            <img className="h-7" src="/icons/cart.svg" alt="Cart icon" />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="bg-Main_medium text-Main_Lowest w-full py-2"
      >
        Retour en haut
      </button>
      <div className="bg-Main_high text-Main_Lowest text-center">
        <h2 className="font-bold text-2xl mb-6 px-4 pt-6">
          Vous aussi, gagnez de l'argent avec Omazon !
        </h2>
        <p className="px-4">
          Transformez vos passions en revenus. Rejoignez notre communauté de
          vendeurs dès aujourd'hui !
        </p>
        <button
          type="button"
          onClick={displayModalAddForm}
          className="p-2 bg-Button_primary_default_bg text-black rounded-lg my-6 border-Button_primary_default_border border-2"
        >
          Devenez vendeur sur Omazon
        </button>
        <div className="bg-Main_high border-t border-Brand_grey">
          <img
            className="w-20 mx-auto py-6"
            src="/logos/omazon.svg"
            alt="Omazon Logo"
          />
        </div>
      </div>
      <div className="bg-Main_highter text-Main_Lowest py-8 flex flex-col items-center gap-2 px-6 text-xs">
        <span>Conditions générales de vente</span>
        <div>
          <span className="pr-4">Vos informations personnelles</span>
          <span>Cookies</span>
        </div>
        <span>Annonces basées sur vos centres d'intérêt</span>
        <span className="pt-6">
          © 2024 Omazon, un clone simplifié de Amazon
        </span>
      </div>
    </div>
  );
}

export default Footer;

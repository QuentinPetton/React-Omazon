import type { Category } from '../../assets/@types';

type CategoriesListProps = {
  categories: Category[];
};

function Categories({ categories }: CategoriesListProps) {
  return (
    <div className="hidden lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 gap-6 m-4 ">
      <h2 className="px-4 pt-10 font-bold text-3xl lg:col-span-6 md: col-span-3">
        Catégories à l'honneur
      </h2>

      {categories.map((categorie) => (
        <article
          key={categorie.id}
          className="my-4 justify-self-center text-center mb-4"
        >
          <div className="relative w-40 h-40 flex justify-center items-center mb-4 ">
            <img
              src={`../src/assets/categories/${categorie.image}`}
              alt={categorie.title}
              className="object-contain w-3/4 h-3/4   "
            />
            <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 rounded-full" />
          </div>
          <span>{categorie.title}</span>
        </article>
      ))}
    </div>
  );
}

export default Categories;

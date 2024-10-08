import type { Category } from '../../assets/@types';

type CategoriesListProps = {
  items: Category[];
};

function Categories({ items }: CategoriesListProps) {
  return (
    <div className="hidden lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 gap-6 m-4 ">
      <h2 className="px-4 pt-10 font-bold text-3xl lg:col-span-6 md: col-span-3">
        Catégories à l'honneur
      </h2>

      {items.map((categorie) => (
        <article key={categorie.id} className="my-4">
          <div className="relative w-40 h-40 text-center">
            <img
              src={`../src/assets/categories/${categorie.image}`}
              alt={categorie.title}
              className="object-contain w-full h-full rounded-full "
            />
            <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 rounded-full" />
            <span>{categorie.title}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Categories;

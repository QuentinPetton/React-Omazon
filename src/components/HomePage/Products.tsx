function Products() {
  return (
    <div>
      <h1 className="px-4 pt-10 font-bold text-3xl">Tous nos produits</h1>
      <article className="p-4 ">
        <div className="relative pb-6">
          <span className=" rounded-tl-lg top-0 left-0 pl-4 pr-10 py-1  bg-Brand_primary text-sm text-Main_Lowest [clip-path:polygon(0%_0%,_100%_0%,_81%_100%,_0%_100%)]">
            N°1 des ventes
          </span>
          <img
            className=" object-cover mx-auto "
            src="../src/assets/products/frisbee.webp"
            alt="Frisbee"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.04)] " />
        </div>
        <p>
          Trixie Frisbee Caoutchouc Naturel 22cm pour chien, Coloris aléatoire
        </p>
        <div className="flex items-center gap-1">
          <span className="font-bold text-3xl">8</span>
          <sup className="font-normal text-xs  ">99 €</sup>
        </div>

        <button
          className="p-2 bg-Brand_primary rounded-3xl
        "
          type="button"
        >
          Ajouter au panier
        </button>
      </article>
    </div>
  );
}

export default Products;

function Products() {
  return (
    <div>
      <h1>Tous nos produits</h1>
      <article className="p-4">
        <div className="relative">
          <img
            className=" object-cover"
            src="../src/assets/products/frisbee.webp"
            alt="Frisbee"
          />

          <div className="absolute inset-0 bg-[rgba(0,0,0,0.04)]" />

          <span className="absolute rounded-tl-lg top-0 left-0 pl-4 pr-10 py-1  bg-Brand_primary text-sm text-Main_Lowest [clip-path:polygon(0%_0%,_100%_0%,_81%_100%,_0%_100%)]">
            N°1 des ventes
          </span>
        </div>
        <p>
          Trixie Frisbee Caoutchouc Naturel 22cm pour chien, Coloris aléatoire
        </p>
        <span>8 99€</span>
        <button type="button">Ajouter au panier</button>
      </article>
    </div>
  );
}

export default Products;

function Footer() {
  return (
    <div>
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
      <div className="bg-Main_highter text-Main_Lowest py-8">
        <span>Conditions générales de vente</span>
        <span>Vos informations personnelles</span>
        <span>Cookies</span>
        <span>Annonces basées sur vos centres d'intérêt</span>
        <span>2024 Omazon, un clone simplifié de Amazon</span>
      </div>
    </div>
  );
}

export default Footer;

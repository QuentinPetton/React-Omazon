function HeaderForm() {
  return (
    <div>
      <form className="flex justify-center w-full" action="">
        <input
          className="rounded-l-md p-2 w-full text-Brand_grey"
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
    </div>
  );
}
export default HeaderForm;

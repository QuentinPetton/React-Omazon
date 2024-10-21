import { useEffect, useRef } from 'react';

//todo focus sur input email

type LoginFormProps = {
  displayLoginForm: boolean;
};

function LoginForm({ displayLoginForm }: LoginFormProps) {
  //Gestion du focus sur input email
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (emailInputRef.current && displayLoginForm) {
      emailInputRef.current.focus();
    }
  }, [displayLoginForm]);

  return (
    <div className="absolute z-10 right-6 top-16">
      {displayLoginForm && (
        <form
          action=""
          className="flex
       flex-col drop-shadow-md text-black bg-Main_Lowest py-8 px-16 gap-4 rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              ref={emailInputRef}
              type="email"
              name="email"
              className="border border-Brand_grey rounded-sm px-2 py-1 caret-black"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              className="border border-Brand_grey rounded-sm px-2 py-1 caret-black"
            />
          </div>

          <button
            className="bg-Button_primary_default_bg border-Button_primary_default_border col-span-2 p-2 rounded-lg mx-8 mt-4 font-bold"
            type="submit"
          >
            Identifiez-vous
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;

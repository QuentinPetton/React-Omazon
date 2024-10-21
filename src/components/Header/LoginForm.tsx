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
      console.log(emailInputRef);
    }
  }, [displayLoginForm]);

  return (
    <div>
      {displayLoginForm && (
        <form
          action=""
          className="flex
       flex-col"
        >
          <div>
            <label htmlFor="email">Adresse e-mail</label>
            <input
              ref={emailInputRef}
              type="email"
              name="email"
              className="border border-Brand_grey rounded-sm px-2 py-1 caret-black"
            />
          </div>

          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              className="border border-Brand_grey rounded-sm px-2 py-1 caret-black"
            />
          </div>

          <button
            className="bg-Button_primary_default_bg border-Button_primary_default_border col-span-2 p-2 rounded-lg mt-2 mx-4 mb-8"
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

import React from "react";
import { useUserContext } from "./UserContext";

const Content = () => {
  const { user } = useUserContext();
  return (
    <main>
      {user && (
        <section>
          <article>
            <h3>Preferencias do usuário:</h3>
            {Object.entries(user.preferencias).map(([key, pref]) => (
              <p>
                {key} : {pref}
              </p>
            ))}
          </article>
        </section>
      )}
    </main>
  );
};

export default Content;

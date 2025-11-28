import React from "react";

const Effect = () => {
  function useEffectCallback() {
    //onInit = quando o componente carrega, aplica todas as ações aqui dentro
    console.log("montou");

    //onDestroy = quando o componente desmonta/desfaz aplica a função de retorno
    return () => {
      console.log("desmontou");
    };
  }

  React.useEffect(useEffectCallback, []);

  return <div>Effect</div>;
};

export default Effect;

const Question = (props) => {
  const { question, onClick } = props;

  const objSubInfos = {
    ano: '2025',
    novel: 'Junior',
    tipo: 'ordenação',
  };

  return (
    <article>
      <header className="header-article">
        <h2>{question.title}</h2>
        {/* {objSubInfos?.ano && <span>Ano : {objSubInfos.ano}</span>}
          {objSubInfos?.novel && <span>novel : {objSubInfos.novel}</span>}
          {objSubInfos?.tipo && <span>tipo : {objSubInfos.tipo}</span>} */}
      </header>
      <p>{enunciado}</p>
      <button onClick={() => setModal(question)}>Ver Detalhes</button>
    </article>
  );
};

export default Question;

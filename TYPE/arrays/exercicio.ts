async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  console.log(data);
  mostrarCursos(data);
}

fetchCursos();

interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: 'iniciante' | 'avancado';
  nome: string;
  tags: Array<string>;
}

function mostrarCursos(cursos: Array<Curso>) {
  cursos.forEach((curso) => {
    let color;

    if (curso.nivel === 'iniciante') {
      color = 'blue';
    } else if (curso.nivel === 'avancado') {
      color = 'red';
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>${curso.horas}</p>
        <p>${curso.aulas}</p>
        <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>${curso.tags.join(', ')}</p>
        <p>${curso.idAulas.join(' | ')}</p>
      </div>
    `;
  });
}

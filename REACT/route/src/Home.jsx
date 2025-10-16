import { Link } from 'react-router-dom';
import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="MAMA" /> */}
      <Helmet>
        <title>Dogs - Home</title>
        <meta name="description" content="descrisçao krl" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <h1>Home</h1>
      <p>essa é a home</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/notebook">Smartphone</Link>
    </div>
  );
};

export default Home;

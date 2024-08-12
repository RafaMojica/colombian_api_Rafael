import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container-404">
      <h2 className="text-404">404</h2>
      <h3 className="text-notFount">Pagina no encontrada.</h3>
      <a href="/" className="link-home">Ir al Inicio</a>
    </div>
  );
};

export default NotFound;

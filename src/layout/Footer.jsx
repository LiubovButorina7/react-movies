function Footer() {
  return (
    <footer className="page-footer green lighten-4">
      <div className="footer-copyright">
        <div className="container">
          Portfolio Project by Liubov Butorina © {new Date().getFullYear()} Copyright 
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

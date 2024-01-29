import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <h2>
      Sorry, this page doesn&apos;t exist. Go to <Link to='/'><span className="home-page">HomePage</span></Link>.    
    </h2>
  );
}
export { NotFound };
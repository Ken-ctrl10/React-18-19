import headerIMG from '/logo.png';

export default function Header() {
  return <header className="header">
    <img src={ headerIMG } alt="Moviedux Logo" />  
    <h2 className="app-subtitle">It's time for popcorn! Find your next movie here.</h2>
  </header>
}

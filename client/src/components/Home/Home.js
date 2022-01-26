import "./home.scss"


export default function Home( {user} ) {

  
  return (
    <nav className="home">
        <div className="wrapper">
            <h2>Hello, {user.username}</h2>
        </div>
    </nav>
  );
}
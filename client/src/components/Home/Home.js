import "./home.scss"


export default function Home( {user} ) {

  
  return (
    <nav className="home">
        <div className="home-wrapper">
            <div className="home-title">Hello, {user.username}</div>
            <div className="home-body">Ready to make your next trip easier to plan, budget, and enjoy with your friends and family?</div>
            <div className="home-body">Look no further! In this application, you can create new vacations to manage where you and your party will want to stay, eat, and have fun.</div>
        </div>
    </nav>
  );
}
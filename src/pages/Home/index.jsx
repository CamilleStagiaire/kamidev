import logo from "../../assets/1.jpg";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="test">
        <img src={logo} alt="Argent Bank Logo" />
        <p>Test1</p>
        <p>Test2</p>
        <p>Test3</p>
        <p>Test4</p>
        <p>Test5</p>
      </div>
    </div>
  );
}
export default Home;

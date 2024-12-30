import "../../assets/css/Home.css"
var Home = () => {
    var Styling={
        fontSize:"30px",
        textDecoration :"underline",
        color:"Blue"
    }
    return(
        <header>
            <h1 style={Styling}> This is navbar</h1>
            <h1 id="idSEg">This is Styling</h1>
            <h1 className="box-model">Hello</h1>
        </header>

    );
}
export default Home;
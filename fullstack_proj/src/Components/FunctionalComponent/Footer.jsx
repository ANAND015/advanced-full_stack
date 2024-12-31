import "../../assets/css/Footer.css"
const Footer =()=>{
    return (
        <div className="ct">
            <div>
                <form action="">
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email"  />
                </form>
                <button>Subscribe</button>
            </div>
            <div className="footer">
                    <h4>DOOGLE</h4>
                    <h3>Teardown</h3>
                    <h3>News</h3>
                    <h3>Partners</h3>
                    <h3>About us</h3>
                    <h3>Terms of use</h3>
            </div>
            <div className="main">
                <h4>Customer Service</h4>
                <h3>Facebook</h3>
                <h3>Instagram</h3>
                <h3>Twitter</h3>
            </div>
            <div className="root">
                <h4>More to Know</h4>
                <h3>Gallery</h3>
                <h3>My Account</h3>
                <h3>Contact us<h3>
                </h3>Reedem Rewards</h3>
            </div>
        </div>
    )
}
export default Footer;
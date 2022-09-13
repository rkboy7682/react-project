
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";




function Home() {
    const navigate = useNavigate();
    function click() {
        navigate("/figma")
    }
    function component() {
        navigate("/")
    }
    function purches() {
        navigate("/purches")
    }

    return (<div>
        <div>
            <div id="heading">
                <Layout /></div>
            <div className="imge">  <img src={require("./Images/back1.jpg")} alt="log" className="imagedesign" /></div>
            <span >
                <h1 className="fontstyle">Create your<br />Website Today<br />with <span style={{ color: "red" }}>ZONE</span></h1>
                <h4 className="fontstyle1">The ZONE is built ontop of MUI,a powerfullibrary that <br />provides flexible, custmizable, and easy-to-use <br />components.</h4>
            </span>
            <br />
            <br />
            <div >
                <button onClick={click} className="buttonstyle">Figma Workshop</button><br /><br /><br/>
            </div>

            <div className="img2">
                <img src={require("./Images/mj logo.png")} alt="log" height={50} width={50} className="imagedesign" />
                <img src={require("./Images/f logo.jpg")} alt="log" height={50} width={50} className="imagedesign" />
                <img src={require("./Images/js logo.jpg")} alt="log" height={50} width={50} className="imagedesign" />
                <img src={require("./Images/logo192.png")} alt="log" height={50} width={50} className="imagedesign" />
                <img src={require("./Images/ts logo.png")} alt="log" height={50} width={50} className="imagedesign" />
            </div>
        </div>
        <br />
        <br />
        <br/>
        <br/>
        <br/>
        <div>
            <div className="heading">

                <div className="imagestyle"> <img src={require("./Images/computer.jpg")} alt="compurte" /></div>

                <div className="fontstyle2">
                    <div> <h4>New Start</h4></div>
                    <div><h1>THE <span style={{ color: "red" }}>ZONE</span> UI KIT</h1></div>
                    <div>  <h3 className="fontstyle2">Morden ui kit to save your time,boost your creativity.Neat and  <br /> super stylish layout ready to help with your projects</h3></div>
                </div>
            </div>
            <br />
            <br /><br /><br/>
            <br /><br /><br/>
            <br /><br /><br/>
            <div>
                <div className="empty"></div>
                <div className="fontstyle1"><h3>INTERFACE STARTER KIT</h3></div>
                <div style={{ fontSize: 30 }}><h1>Flexible <br />Components</h1></div>
                <div className="fontstyle1"><h3>Pre-set components are easy to customize and use.<br />
                    We collected most popular elements. Menu,<br /> sliders, buttons, inputs etc. are all here. Just dive in!<br /></h3></div>

                <br />
                <button onClick={component} className="buttonstyle">Browse Components </button>
            </div>
            <br /><br /><br/>
            <br /><br /><br/>
            <br /><br /><br/>
             <br /><br /><br/>
             <br /><br /><br/>
             <br /><br /><br/>
            <div>
                <span className="fontstyle1"><h3>FEATURE HIGHLIGHTS</h3></span>
                <span className="listmaindiv">
                    <ul className="liststyle2">
                        <li>< div className="line"><h4>4 Prebuilt Websites</h4></ div ></li>
                        <li>< div className="line"><h4>50+ Demo Pages</h4></ div></li>
                        <li>< div className="line"><h4>Easy to Customize</h4></ div ></li>
                        <li>< div className="line"><h4>Easy to Customize</h4></ div ></li>
                        <li>< div className="line"><h4>Dark Mode</h4></ div ></li>
                        <li>< div className="line"><h4>Awesome Animation</h4></ div ></li>
                        <li>< div className="line"><h4>Google Fonts</h4></ div> </li>
                        <li>< div className="line"><h4>Figma Design</h4></ div ></li>
                        <li>< div className="line"><h4>Fully Responsive</h4></ div ></li>
                        <li>< div className="line"><h4>Mega Menu</h4></ div ></li>
                        <li>< div className="line"><h4>Clean Markup</h4></ div ></li>
                        <li>< div className="line"><h4>Free Updates</h4></ div ></li>
                        <li>< div className="line"><h4>Fast Supportu</h4></ div ></li>
                        <li>< div className="line"><h4>Well Documented</h4></div></li></ul>
                </span>
                <span><h1>Have Everything <br />You Need</h1></span>
                <span><h3 className="fontstyle1">Let's see what makes our theme super<br /> powerful and user-friendly!</h3></span>
                <button onClick={purches} className="buttonstyle">Purches Now</button>
            </div>
        </div>


    </div>)
}
export default Home;
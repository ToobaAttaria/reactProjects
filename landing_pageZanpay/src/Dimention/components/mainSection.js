import { BsStars } from "react-icons/bs";
import { MdOutlineGppGood } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";


export default function MainSection() {

    return (
        <section className="main-section">

            <div className="trusted-users">
                <i ><BsStars /></i>
                <p>Trusted by over 1 million users worldwide</p>
            </div>

            <div className="content">
                <h2>
                    Revolutionize Your
                    <span className="highlight"> Payments Experience</span>
                </h2>
                <p>
                    Unlock seamless, secure, and instant financial transactions.
                    Manage, send, and receive money effortlessly with the ability
                    to scale and integrate multiple financial services.
                </p>
            </div>
            <div className="second-btnContainer">
                <button>Start Now</button>
                <button>Explore Zenly</button>
            </div>

            <div className="features-box">
                <div className="feature">
                    <i><MdOutlineGppGood /></i>
                    <h4>Secure Transfer</h4>
                    <p>Zenpay ensures your funds reach their destination instantly,with top-notch security.</p>
                </div>
                <div className="feature">
                    <i><BsFillLightningChargeFill /></i>
                    <h4>Seamless Integration</h4>
                    <p>Enjoy a streamlined financial experience, from business transactions to personal finance.</p>
                </div>
                 <div className="feature">
                    <i><TbTargetArrow /></i>
                    <h4>Multi-Currency Support</h4>
                    <p>Effortlessly transat in multiple currencies. Zenpay simplifies international payments.</p>
                </div>

            </div>
        </section>
    );
}

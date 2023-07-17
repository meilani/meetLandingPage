import meetLogo from '../assets/meet-logo.png'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="logo-wrap">
                <h1 className="title">
                    <img 
                        src={meetLogo}
                        className="logo"
                        alt="meet"
                        width="119"
                        height="28"
                    />
                </h1>
            </div>
        </header>
    )
}
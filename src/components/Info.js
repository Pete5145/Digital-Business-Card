export default function Info() {
    return (
        <div className="info">
            <img src={require("../images/profile.jpg")} alt="profile" className="avatar"/>
            <h3 className="avatar-name">Peter Imade</h3>
            <p className="avatar-job">Frontend Developer</p>
            <p className="avatar-site">peterimade.website</p>
            <div className="buttons">
                <button type="button" className="email">
                <img src={require("../images/Mail.png")} alt="main" />
                Email</button>
                <button type="button" className="linkedin">
                <img src={require("../images/Vector.png")} alt="in" />
                LinkedIn</button>
            </div>
        </div>
    )
}
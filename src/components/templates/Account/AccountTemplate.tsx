
export const AccountTemplate = () => {
    const [setActive, isSetActive] = useState(1)
    return (
        <div className="container-page">
            <ul>
                <li className="title-account account-active" onClick={() => { isSetActive()}}>Account</li>
                <li className="title-account" onClick={() => { isSetActive()}}>Password</li>
            </ul>
        </div>
    )
}

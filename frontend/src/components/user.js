
const User = ( {user} ) => {

    return (

        <div className = "user">
            <h3>{user.name} {user.surname}</h3>
            <h4> {user.address} </h4>
            <h4> {user.telephone} </h4>
            <h4> {user.mail} </h4>
            <h4> {user.country} </h4>
        </div>
    );
}

export default User;
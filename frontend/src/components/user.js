
const User = ( {user} ) => {

    return (

        <div className = "user">
            <h3>{user.address.name} {user.address.surname}</h3>
            <h4> {user.address.address} </h4>
            <h4> {user.phoneNumber} </h4>
            <h4> {user.email} </h4>
            <h4> {user.address.country} </h4>
        </div>
    );
}

export default User;
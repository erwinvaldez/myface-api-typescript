import UserDetailsCard from "./UserDetailsCard";

const CheckUserId = (user, id) => {
    if(user.id == id){
        return UserDetailsCard(user)
    }
     
}

export default CheckUserId;
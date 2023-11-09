import Single from "../../components/single";
import "./user.scss";
import { singleUser } from "../../data";

const User = () => {
  //Fetch data and send to Single Component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;

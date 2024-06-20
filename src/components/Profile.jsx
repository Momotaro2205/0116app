import styles from "./Profile.module.css";

export const Profile = (props) => {
  const idStyle = {
    color: "green",
    fontSize: "2rem",
  };
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  //console.log(user);
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={user.avatar} className="img-fluid" alt="Фото пользователя" />
      </div>
      <div className="col-md-8">
        <h2 className={styles.name}>
          Фамилия имя:{" "}
          <span>
            {" "}
            {user.lastname} {user.name}
          </span>
        </h2>
        <p className={styles.email}>
          Email: <span>{user.email}</span>
        </p>
        <p style={idStyle}>
          Id: <span>{user.id}</span>
        </p>
        <p style={{ fontSize: 24, color: "red" }}>
          История о себе: {user.about}
        </p>
      </div>
    </div>
  );
};

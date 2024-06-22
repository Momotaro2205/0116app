import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.id}</td>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.lastname}
        </NavLink>
      </td>
      <td>{props.email}</td>
    </tr>
  );
};

export class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usersRow: [] };
  }

  componentDidMount() {
    this.props.function().then((users) => {
      // console.log(users);
      let usersCount = users.length;
      let usersRow = [];

      for (let i = 0; i < usersCount; i++) {
        usersRow.push(
          <TableRow
            key={i}
            index={i}
            name={users[i].name}
            lastname={users[i].lastname}
            id={users[i].id}
            email={users[i].email}
          />
        );
      }
      this.setState({ usersRow: usersRow });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Id</th>
                <th scope="col">Имя и Фамилия</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>{this.state.usersRow}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

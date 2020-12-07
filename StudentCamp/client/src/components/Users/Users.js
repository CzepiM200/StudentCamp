import "./_users.scss";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

const fakeUsers = [
    {
        ID: 1,
        FirstName: 'Marcin', 
        LastName: 'Czepiela',
        TelephoneNumber: '759635984',
        Birthday: '1998-01-07',
        ArrivalDate: '2020-08-10',
        DepartureDate: '2020-08-18',
        FunctionName: 'Uczestnik',
        RoomNumber: '2',
    },
    {
        ID: 2,
        FirstName: 'Stanisław', 
        LastName: 'Franczyk',
        TelephoneNumber: '459638945',
        Birthday: '1999-03-12',
        ArrivalDate: '2020-08-10',
        DepartureDate: '2020-08-17',
        FunctionName: 'Uczestnik',
        RoomNumber: '2',
    },
    {
        ID: 3,
        FirstName: 'Beata ', 
        LastName: 'Jakubiak',
        TelephoneNumber: '957634859',
        Birthday: '1998-09-21',
        ArrivalDate: '2020-08-11',
        DepartureDate: '2020-08-17',
        FunctionName: 'Uczestnik',
        RoomNumber: '1',
    },
    {
        ID: 4,
        FirstName: 'Monika', 
        LastName: 'Czech',
        TelephoneNumber: '648549318',
        Birthday: '1998-03-02',
        ArrivalDate: '2020-08-11',
        DepartureDate: '2020-08-18',
        FunctionName: 'Uczestnik',
        RoomNumber: '1',
    },
]

const Users = (props) => {
  const [users, setUsers] = useState(fakeUsers);

  const generateUsersList = () => {
    const cards = users.map((item, index) => {
      return(
        <div className="card border-primary mb-3">
          <div className="card-header">
            <h4 className="card-title">
              {`${item.FirstName} ${item.LastName}`}
            </h4>
            <div>
              <Link to="/users/edit" className="btn btn-primary">
                Edytuj
              </Link>
              <button type="button" class="btn btn-danger">Usuń</button>
            </div>
          </div>
          <div className="card-body">
              <h5 className="card-title">Dane uczestnika:</h5>
              <div className="card-bottom">
                <div className="card-left">
                  <p className="card-text">{`Numer telefonu: ${item.TelephoneNumber}`}</p>
                  <p className="card-text">{`Urodziny: ${item.Birthday}`}</p>
                  <p className="card-text">{`Funkcja: ${item.FunctionName}`}</p>
                </div>
                <div className="card-right">
                  <p className="card-text">{`Przyjazd: ${item.ArrivalDate}`}</p>
                  <p className="card-text">{`Odjazd: ${item.DepartureDate}`}</p>
                  <p className="card-text">{`Pokój: ${item.RoomNumber}`}</p>
                </div>
              </div>
          </div>
        </div>
      );
    });
    return cards;
  }

  return (  
    <>
      <Route exact path="/users">
        <section className="users">
          <div className="card border-primary mb-3">
            <div className="card-header">
              <h2>Lista uczestników</h2>
            </div>
          </div>
          <article className="users__list">
            {generateUsersList()}
            <div className="card border-primary mb-3">
              <div className="card-header">
                <h4 className="card-title">
                  Nowy uczestnik
                </h4>
                <div>
                  <Link to="/users/add" className="btn btn-success">
                    Dodaj
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>      
      </Route>
      <Route exact path="/users/add">  
        <section className="users-add">
          <form>
            <fieldset>
              <legend>Dodawanie nowego uczestnika</legend>
              <div className="form-group">
                <label>Imię</label>
                <input type="text" className="form-control" min="1" placeholder="Numer pokoju"/>
              </div>
              <div className="form-group">
                <label>Nazwisko</label>
                <input type="text" className="form-control" min="0" placeholder="Numer piętra"/>
              </div>
              <div class="form-group">
                <label>Płeć</label>
                <select class="custom-select">
                  <option value="K">Kobieta</option>
                  <option value="M">Mężczyzna</option>
                </select>
              </div>
              <div className="form-group">
                <label>Numer telefonu</label>
                <input type="number" className="form-control" min="100000000" placeholder="Numer telefonu"/>
              </div>
              <div className="form-group">
                <label>Data urodzenia</label>
                <input type="date" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Data przyjazdu</label>
                <input type="date" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Data odjazdu</label>
                <input type="date" className="form-control"/>
              </div>
              <button type="submit" className="btn btn-primary">Dodaj uczestnika</button>
            </fieldset>
          </form>
        </section> 
      </Route>
      <Route exact path="/users/edit">  
      </Route>
    </>
  );
};

export default Users;
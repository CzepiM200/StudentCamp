import "./_rooms.scss";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

const fakeRooms = [
    {
        ID: 1,
        Number: 1, 
        FloorNumber: 1,
        TenantsGender: 'K',
        SeatsNumber: '10',
        BusySeatsNumber: '4',
        People: [
            { FirstName: 'Beata', LastName: 'Jakubiak'},
            { FirstName: 'Krystyna', LastName: 'Nowak'},
            { FirstName: 'Katarzyna', LastName: 'Bielawa'},
            { FirstName: 'Monika', LastName: 'Czech'},
        ]
    },
    {
        ID: 2,
        Number: 2,
        FloorNumber: 1,
        TenantsGender: 'M',
        SeatsNumber: '8',
        BusySeatsNumber: '3',
        People: [
            { FirstName: 'Marcin', LastName: 'Czepiela'},
            { FirstName: 'Stanisław', LastName: 'Franczyk'},
            { FirstName: 'Kamil', LastName: 'Jarema'},
        ]
    },
    {
        ID: 3,
        Number: 3,
        FloorNumber: 2,
        TenantsGender: 'M',
        SeatsNumber: '2',
        BusySeatsNumber: '1',
        People: [
            { FirstName: 'Jacke', LastName: 'Koronowski'},
        ]
    },
    {
      ID: 4,
      Number: 4, 
      FloorNumber: 2,
      TenantsGender: 'K',
      SeatsNumber: '5',
      BusySeatsNumber: '2',
      People: [
          { FirstName: 'Monika', LastName: 'Panek'},
          { FirstName: 'Weronika', LastName: 'Nocon'},
      ]
  },
  {
      ID: 5,
      Number: 5,
      FloorNumber: 3,
      TenantsGender: 'M',
      SeatsNumber: '2',
      BusySeatsNumber: '1',
      People: [
          { FirstName: 'Grzegorz', LastName: 'Dłużniak'},
      ]
  },
]

const Rooms = (props) => {
  const [rooms, setRooms] = useState(fakeRooms);

  const generateRooms = () => {
    const cards = rooms.map((item, index) => {
      return(
        <div className="card border-primary mb-3">
          <div className="card-header">
            <h4 className="card-title">
              Pokój nr. {item.Number} - ({item.BusySeatsNumber}/{item.SeatsNumber})
            </h4>
            <div>
              <Link to="/rooms/edit" className="btn btn-primary">
                Edytuj
              </Link>
              <button type="button" class="btn btn-danger">Usuń</button>
            </div>
          </div>
          <div className="card-body">
              <h5 className="card-title">Lista mieszkańców:</h5>
              {item.People.map((person, personId) => 
                <p className="card-text">{`${personId+1}. ${person.FirstName} ${person.LastName}`}</p>
              )}
          </div>
        </div>
      );
    });
    return cards;
  }

  return (  
    <>
      <Route exact path="/rooms">
        <section className="rooms">
          <div className="card border-primary mb-3">
            <div className="card-header">
              <h2>Lista pokojów</h2>
            </div>
          </div>
          <article className="rooms__list">
            {generateRooms()}
            <div className="card border-primary mb-3">
              <div className="card-header">
                <h4 className="card-title">
                  Nowy pokój
                </h4>
                <div>
                  <Link to="/rooms/add" className="btn btn-success">
                    Dodaj
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>      
      </Route>
      <Route exact path="/rooms/add">  
        <section className="rooms-add">
          <form>
            <fieldset>
              <legend>Dodawanie nowego pokoju</legend>
              <div className="form-group">
                <label>Numer pokoju</label>
                <input type="number" className="form-control" min="1" placeholder="Numer pokoju"/>
              </div>
              <div className="form-group">
                <label>Numer piętra</label>
                <input type="number" className="form-control" min="0" placeholder="Numer piętra"/>
              </div>
              <div class="form-group">
                <label>Płeć</label>
                <select class="custom-select">
                  <option value="K">Kobiety</option>
                  <option value="M">Mężczyźni</option>
                </select>
              </div>
              <div className="form-group">
                <label>Liczba miejsc</label>
                <input type="number" className="form-control" min="1" placeholder="Liczba miejsc"/>
              </div>
              <button type="submit" className="btn btn-primary">Dodaj pokój</button>
            </fieldset>
          </form>
        </section> 
      </Route>
      <Route exact path="/rooms/edit">  
      </Route>
    </>
  );
};

export default Rooms;
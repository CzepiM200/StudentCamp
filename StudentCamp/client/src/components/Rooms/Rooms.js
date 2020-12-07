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
              Pokój numer {item.Number} ({item.BusySeatsNumber}/{item.SeatsNumber})
            </h4>
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
      <Route path="/rooms">
        <section className="rooms">
          <div className="card border-primary mb-3">
            <div className="card-header">
              <h2>Lista pokojów</h2>
            </div>
          </div>
          <article className="rooms__list">
            {generateRooms()}
          </article>
        </section>      
      </Route>
      <Route exact path="/rooms/add">  
      </Route>
      <Route exact path="/rooms/edit">  
      </Route>
    </>
  );
};

export default Rooms;
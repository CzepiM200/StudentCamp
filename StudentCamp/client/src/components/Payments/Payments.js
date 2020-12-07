import "./_payments.scss";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

const fakePayments = [
    {
      ID: 1,
      Type: 'Przelew', 
      Amount: '900,00',
      Person: {
          ID: 1,
          FirstName: 'Marcin',
          LastName: 'Czepiela'
      }
    },
    {
      ID: 2,
      Type: 'Przelew', 
      Amount: '900,00',
      Person: {
          ID: 1,
          FirstName: 'Katarzyna',
          LastName: 'Bielawa'
      }
    },
    {
      ID: 3,
      Type: 'Przelew', 
      Amount: '850,00',
      Person: {
          ID: 1,
          FirstName: 'Stanisław',
          LastName: 'Franczyk'
      }
    },
    {
        ID: 4,
        Type: 'Przelew', 
        Amount: '900,00',
        Person: {
            ID: 1,
            FirstName: 'Beata',
            LastName: 'Jakubiak'
        }
      },
      {
        ID: 5,
        Type: 'Przelew', 
        Amount: '900,00',
        Person: {
            ID: 1,
            FirstName: 'Krystyna',
            LastName: 'Nowak'
        }
      },
      {
        ID: 6,
        Type: 'Przelew', 
        Amount: '850,00',
        Person: {
            ID: 1,
            FirstName: 'Monika',
            LastName: 'Czech'
        }
      },
]

const Payments = (props) => {
  const [payments, setPayments] = useState(fakePayments);

  const generatePaymentsList = () => {
    const cards = payments.map((item, index) => {
      return(
        <div key={index} className="card border-primary mb-3">
          <div className="card-header">
            <h4 className="card-title">
              {`${item.Person.FirstName} ${item.Person.LastName} - ${item.Type}: ${item.Amount} zł`}
            </h4>
            <div>
              <Link to="/users/edit" className="btn btn-primary">
                Edytuj
              </Link>
              {/* <button type="button" className="btn btn-danger">Usuń</button> */}
            </div>
          </div>
        </div>
      );
    });
    return cards;
  }

  return (  
    <>
      <Route exact path="/payments">
        <section className="payments">
          <div className="card border-primary mb-3">
            <div className="card-header">
              <h2>Lista wpłat</h2>
            </div>
          </div>
          <article className="payments__list">
            {generatePaymentsList()}
            <div className="card border-primary mb-3">
              <div className="card-header">
                <h4 className="card-title">
                  Nowa wpłata
                </h4>
                <div>
                  <Link to="/payments/add" className="btn btn-success">
                    Dodaj
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>      
      </Route>
      <Route exact path="/payments/add">  
        <section className="payments-add">
          <form>
            <fieldset>
              <legend>Dodawanie nowej wpłaty</legend>
              <div className="form-group">
                <label>Imię</label>
                <input type="text" className="form-control" min="1" placeholder="Imię osoby wpłacającej"/>
              </div>
              <div className="form-group">
                <label>Nazwisko</label>
                <input type="text" className="form-control" min="0" placeholder="Nazwisko osoby wpłacającej"/>
              </div>
              <div class="form-group">
                <label>Typ płatności</label>
                <select class="custom-select">
                  <option value="P">Przelew</option>
                  <option value="G">Gotówka</option>
                </select>
              </div>
              <div className="form-group">
                <label>Kwota</label>
                <input type="number" className="form-control" min="0" placeholder="Wpłacona kwota"/>
              </div>
              <button type="submit" className="btn btn-primary">Dodaj wpłatę</button>
            </fieldset>
          </form>
        </section> 
      </Route>
      <Route exact path="/payments/edit">  
      </Route>
    </>
  );
};

export default Payments;
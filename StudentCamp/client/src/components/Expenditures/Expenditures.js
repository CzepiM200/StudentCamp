import "./_expenditures.scss";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

const fakeExpenditures = [
    {
      ID: 1,
      Type: 'Faktura VAT', 
      Amount: '1123,20',
      Name: 'Art. spożywcze',
      Person: {
          ID: 1,
          FirstName: 'Marcin',
          LastName: 'Czepiela'
      }
    },
    {
      ID: 2,
      Type: 'Faktura VAT', 
      Amount: '532,90',
      Name: 'Art. spożywcze',
      Person: {
          ID: 1,
          FirstName: 'Marcin',
          LastName: 'Czepiela'
      }
    },
    {
      ID: 3,
      Type: 'Faktura VAT', 
      Amount: '734,50',
      Name: 'Art. spożywcze',
      Person: {
          ID: 1,
          FirstName: 'Stanisław',
          LastName: 'Franczyk'
      }
    },
    {
        ID: 4,
        Type: 'Faktura VAT', 
        Amount: '342,30',
        Name: 'Art. spożywcze',
        Person: {
            ID: 1,
            FirstName: 'Marcin',
            LastName: 'Czepiela'
        }
      },
      {
        ID: 5,
        Type: 'Paragon fiskalny', 
        Amount: '102,00',
        Name: 'Art. papiernicze',
        Person: {
            ID: 1,
            FirstName: 'Stanisław',
            LastName: 'Franczyk'
        }
      },
      {
        ID: 6,
        Type: 'Faktura VAT', 
        Amount: '43,50',
        Name: 'Art. spożywcze',
        Person: {
            ID: 1,
            FirstName: 'Stanisław',
            LastName: 'Franczyk'
        }
      },
      {
        ID: 6,
        Type: 'Faktura VAT', 
        Amount: '123,76',
        Name: 'Art. papiernicze',
        Person: {
            ID: 1,
            FirstName: 'Stanisław',
            LastName: 'Franczyk'
        }
      },
]

const Expenditures = (props) => {
  const [expenditures, setExpenditures] = useState(fakeExpenditures);

  const generateExpendituresList = () => {
    const cards = expenditures.map((item, index) => {
      return(
        <div key={index} className="card border-primary mb-3">
          <div className="card-header">
            <h4 className="card-title">
              {`${item.Person.FirstName} ${item.Person.LastName} - ${item.Name} - ${item.Type}: ${item.Amount} zł`}
            </h4>
            <div>
              <Link to="/users/edit" className="btn btn-primary">
                Edytuj
              </Link>
              <button type="button" className="btn btn-danger">Usuń</button>
            </div>
          </div>
        </div>
      );
    });
    return cards;
  }

  return (  
    <>
      <Route exact path="/expenditures">
        <section className="expenditures">
          <div className="card border-primary mb-3">
            <div className="card-header">
              <h2>Lista wydatków</h2>
            </div>
          </div>
          <article className="expenditures__list">
            {generateExpendituresList()}
            <div className="card border-primary mb-3">
              <div className="card-header">
                <h4 className="card-title">
                  Nowy wydatek
                </h4>
                <div>
                  <Link to="/expenditures/add" className="btn btn-success">
                    Dodaj
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>      
      </Route>
      <Route exact path="/expenditures/add">  
        <section className="expenditures-add">
          <form>
            <fieldset>
              <legend>Dodawanie nowego wydatku</legend>
              <div className="form-group">
                <label>Imię</label>
                <input type="text" className="form-control" min="1" placeholder="Imię osoby wypłacającej"/>
              </div>
              <div className="form-group">
                <label>Nazwisko</label>
                <input type="text" className="form-control" min="0" placeholder="Nazwisko osoby wypłacającej"/>
              </div>
              <div class="form-group">
                <label>Typ płatności</label>
                <select class="custom-select">
                  <option value="P">Paragon fiskalny</option>
                  <option value="F">Faktura VAT</option>
                </select>
              </div>
              <div className="form-group">
                <label>Kwota</label>
                <input type="number" className="form-control" min="0" placeholder="Wypłacana kwota"/>
              </div>
              <button type="submit" className="btn btn-primary">Dodaj wydatek</button>
            </fieldset>
          </form>
        </section> 
      </Route>
      <Route exact path="/expenditures/edit">  
      </Route>
    </>
  );
};

export default Expenditures;
import SForm from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form() {
  const [names, setNames] = useState('');
  const [getNames, setGetNames] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (names !== '') {
      const aEnvoyer = {
        name: names,
      };
      axios.post('http://localhost:5050/users', aEnvoyer);
      setNames('');
    }
  };

  const getName = () => {
    axios.get('http://localhost:5050/users').then(({ data }) => {
      setGetNames(data);
    });
  };

  useEffect(() => {
    const interval = setInterval(getName, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SForm>
      <div className='Argo'>
        <h2>Ajouter un(e) Argonaute</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Nom de l&apos;Argonaute</label>
          <br />
          <input
            type='text'
            value={names}
            onChange={(evt) => {
              setNames(evt.target.value);
            }}
            placeholder='Charalampos'
          />
          <button className='button' type='submit'>
            Envoyer
          </button>
        </form>
      </div>

      <div className='section'>
        <h2>Membres de l'équipage</h2>
        <div className='name'>
          <>
            {getNames.map((getname) => {
              return (
                <div className='list' key={getname.id}>
                  <p>{getname.name}</p>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </SForm>
  );
}

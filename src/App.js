import Card from './Card';
import contacts from './contacts';
import './App.css';

function App() {
  return (
    <div className="heading">
      <h1 className='heading'>My contacts</h1>
      <Card 
      name={contacts[0].name}
      source={contacts[0].imgURL}
      cell={contacts[0].phone}
      email={contacts[0].email} />
      <Card 
      name={contacts[1].name}
      source={contacts[1].imgURL}
      cell={contacts[1].phone}
      email={contacts[1].email} />
      <Card 
      name={contacts[2].name}
      source={contacts[2].imgURL}
      cell={contacts[2].phone}
      email={contacts[2].email} />
    </div>
  );
}

export default App;

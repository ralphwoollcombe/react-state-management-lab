import {useState} from 'react'

const App = () => {
const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
let   totalStrength = team.reduce((total, fighter) => {
    return total + fighter.strength
  }, 0)
  let totalAgility = team.reduce((total, fighter) => {
    return total + fighter.agility
  }, 0)
const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])

const handleAddFighter = (fighter) => {
  
  if(money >= fighter.price) {
  const fighterId = fighter.id
  const newTeam = [...team, fighter];
  const newFighters = zombieFighters.filter(fighter => fighterId !== fighter.id)
  const newMoney = money - fighter.price
  setTeam(newTeam);
  setZombieFighters(newFighters);
  setMoney(newMoney)
} else {
  console.log("Not enough money")
}}

const handleRemoveFighter = (fighter) => {
  const fighterId = fighter.id;
  const newZombieFighters = [...zombieFighters, fighter];
  const newTeam = team.filter(fighter => fighterId !== fighter.id);
  const newMoney = money + fighter.price;
  setZombieFighters(newZombieFighters);
  setTeam(newTeam);
  setMoney(newMoney);
}

  return (
    <div>
      <p className='money'>My Bank: {money}</p>
      <div className='team'>
        <h2>Team:</h2>
          <p>{team.length === 0 ? 'Pick some team members' : ''}</p>
          <p>Total Strength: {totalStrength}</p>
          <p>Total Agility: {totalAgility}</p>
        <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} ></img>
            <div>
              <h3>Name: {fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => {handleRemoveFighter(fighter)}} >Remove Fighter</button>
            </div>
          </li>
        ))}
        </ul>
      </div>
      <h2>Zombie Fighters:</h2>
      <ul className='fighters'>
      {zombieFighters.map((fighter) => (
      <li key={fighter.id}>
        <img src={fighter.img} alt={fighter.name} ></img>
        <div>
          <h3>Name: {fighter.name}</h3>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => {handleAddFighter(fighter)}} >Add Fighter</button>
        </div>
      </li>
      ))}
      </ul>
    </div>
  );
}

export default App

import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import PlayerList from './components/PlayerList';
import Navbar from './components/NavBar';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(err => {
        console.log('something went wrong', err);
      })
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <PlayerList players={this.state.players}/>
      </div>
    )
  }
}

export default App;

/*
data: Array(101)
  [0 … 99]
    0: {name: "Alex Morgan", country: "United States", searches: 100, id: 0}
    1: {name: "Megan Rapinoe", country: "United States", searches: 99, id: 1}
    2: {name: "Marta", country: "Brazil", searches: 18, id: 2}
    3: {name: "Rose Lavelle", country: "United States", searches: 11, id: 3}
    4: {name: "Carli Lloyd", country: "United States", searches: 9, id: 4}
    5: {name: "Julie Ertz", country: "United States", searches: 8, id: 5}
    6: {name: "Christen Press", country: "United States", searches: 8, id: 6}
    7: {name: "Kelley O'Hara", country: "United States", searches: 8, id: 7}
    8: {name: "Tobin Heath", country: "United States", searches: 7, id: 8}
    9: {name: "Wendie Renard", country: "France", searches: 7, id: 9}
    10: {name: "Kosovare Asllani", country: "Sweden", searches: 6, id: 10}
    11: {name: "Lieke Martens", country: "Netherlands", searches: 6, id: 11}
    12: {name: "Amandine Henry", country: "France", searches: 5, id: 12}
    13: {name: "Ali Krieger", country: "United States", searches: 5, id: 13}
    14: {name: "Mallory Pugh", country: "United States", searches: 4, id: 14}
    15: {name: "Samantha Kerr", country: "Australia", searches: 4, id: 15}
    16: {name: "Christiane Endler", country: "Chile", searches: 4, id: 16}
    17: {name: "Daniëlle van de Donk", country: "Netherlands", searches: 4, id: 17}
    18: {name: "Lucy Bronze", country: "England", searches: 4, id: 18}
    19: {name: "Ashlyn Harris", country: "United States", searches: 4, id: 19}
    20: {name: "Eugénie Le Sommer", country: "France", searches: 4, id: 20}
    21: {name: "Jackie Groenen", country: "Netherlands", searches: 4, id: 21}
    22: {name: "Abby Dahlkemper", country: "United States", searches: 3, id: 22}
    23: {name: "Steph Houghton", country: "England", searches: 3, id: 23}
    24: {name: "Vivianne Miedema", country: "Netherlands", searches: 3, id: 24}
    25: {name: "Barbara Bonansea", country: "Italy", searches: 3, id: 25}
    26: {name: "Giulia Gwinn", country: "Germany", searches: 3, id: 26}
    27: {name: "Shanice van de Sanden", country: "Netherlands", searches: 3, id: 27}
    28: {name: "Cristiane Rozeira", country: "Brazil", searches: 3, id: 28}
    29: {name: "Alex Greenwood", country: "England", searches: 3, id: 29}
    30: {name: "Bárbara Micheline do Monte Barbosa", country: "Brazil", searches: 2, id: 30}
    31: {name: "Alexandra Long", country: "United States", searches: 2, id: 31}
    32: {name: "Alyssa Naeher", country: "United States", searches: 2, id: 32}
    33: {name: "Gaëtane Thiney", country: "France", searches: 2, id: 33}
    34: {name: "Formiga", country: "Brazil", searches: 2, id: 34}
    35: {name: "Sari van Veenendaal", country: "Netherlands", searches: 2, id: 35}
    36: {name: "Sakina Karchaoui", country: "France", searches: 2, id: 36}
    37: {name: "Valérie Gauvin", country: "France", searches: 2, id: 37}
    38: {name: "Crystal Dunn", country: "United States", searches: 2, id: 38}
    39: {name: "Lindsey Horan", country: "United States", searches: 2, id: 39}
    40: {name: "Millie Bright", country: "England", searches: 2, id: 40}
    41: {name: "Sofia Jakobsson", country: "Sweden", searches: 2, id: 41}
    42: {name: "Sara Gama", country: "Italy", searches: 2, id: 42}
    43: {name: "Amel Majri", country: "France", searches: 2, id: 43}
    44: {name: "Marion Torrent", country: "France", searches: 2, id: 44}
    45: {name: "Toni Duggan", country: "England", searches: 2, id: 45}
    46: {name: "Sara Däbritz", country: "Germany", searches: 2, id: 46}
    47: {name: "Dzsenifer Marozsán", country: "Germany", searches: 2, id: 47}
    48: {name: "Delphine Cascarino", country: "France", searches: 2, id: 48}
    49: {name: "Laura Giuliani", country: "Italy", searches: 1, id: 49}
    50: {name: "Jill Roord", country: "Netherlands", searches: 1, id: 50}
    51: {name: "Sherida Spitse", country: "Netherlands", searches: 1, id: 51}
    52: {name: "Nikita Parris", country: "England", searches: 1, id: 52}
    53: {name: "Sam Mewis", country: "United States", searches: 1, id: 53}
    54: {name: "Tamires Cássia Dias Gomes", country: "Brazil", searches: 1, id: 54}
    55: {name: "Christine Sinclair", country: "Canada", searches: 1, id: 55}
    56: {name: "Stina Blackstenius", country: "Sweden", searches: 1, id: 56}
    57: {name: "Rachel Daly", country: "England", searches: 1, id: 57}
    58: {name: "Sarah Bouhaddi", country: "France", searches: 1, id: 58}
    59: {name: "Magdalena Eriksson", country: "Sweden", searches: 1, id: 59}
    60: {name: "Débora Cristiane de Oliveira", country: "Brazil", searches: 1, id: 60}
    61: {name: "Caroline Seger", country: "Sweden", searches: 1, id: 61}
    62: {name: "Valentina Giacinti", country: "Italy", searches: 1, id: 62}
    63: {name: "Becky Sauerbrunn", country: "United States", searches: 1, id: 63}
    64: {name: "Nilla Fischer", country: "Sweden", searches: 1, id: 64}
    65: {name: "Cristiana Girelli", country: "Italy", searches: 1, id: 65}
    66: {name: "Jennifer Hermoso", country: "Spain", searches: 1, id: 66}
    67: {name: "Fran Kirby", country: "England", searches: 1, id: 67}
    68: {name: "Manuela Giugliano", country: "Italy", searches: 1, id: 68}
    69: {name: "Lina Hurtig", country: "Sweden", searches: 1, id: 69}
    70: {name: "Ellen White", country: "England", searches: 1, id: 70}
    71: {name: "Hedvig Lindahl", country: "Sweden", searches: 1, id: 71}
    72: {name: "Fridolina Rolfö", country: "Sweden", searches: 1, id: 72}
    73: {name: "Alexandra Popp", country: "Germany", searches: 1, id: 73}
    74: {name: "Jill Scott", country: "England", searches: 1, id: 74}
    75: {name: "Karen Carney", country: "England", searches: 1, id: 75}
    76: {name: "María Pilar León", country: "Spain", searches: 1, id: 76}
    77: {name: "Aurora Galli", country: "Italy", searches: 1, id: 77}
    78: {name: "Martina Rosucci", country: "Italy", searches: 1, id: 78}
    79: {name: "Beth Mead", country: "England", searches: 1, id: 79}
    80: {name: "Andressa Alves da Silva", country: "Brazil", searches: 1, id: 80}
    81: {name: "Caroline Graham Hansen", country: "Norway", searches: 1, id: 81}
    82: {name: "Estefanía Banini", country: "Argentina", searches: 1, id: 82}
    83: {name: "Griedge Mbock Bathy", country: "France", searches: 1, id: 83}
    84: {name: "Merel van Dongen", country: "Netherlands", searches: 1, id: 84}
    85: {name: "Kadidiatou Diani", country: "France", searches: 1, id: 85}
    86: {name: "Andressa Cavalari Machry", country: "Brazil", searches: 1, id: 86}
    87: {name: "Alia Guagni", country: "Italy", searches: 1, id: 87}
    88: {name: "Lena Goeßling", country: "Germany", searches: 1, id: 88}
    89: {name: "Lineth Beerensteyn", country: "Netherlands", searches: 1, id: 89}
    90: {name: "Stefanie van der Gragt", country: "Netherlands", searches: 1, id: 90}
    91: {name: "Jodie Taylor", country: "England", searches: 1, id: 91}
    92: {name: "Melanie Leupolz", country: "Germany", searches: 1, id: 92}
    93: {name: "Elin Rubensson", country: "Sweden", searches: 1, id: 93}
    94: {name: "Morgan Brian", country: "United States", searches: 1, id: 94}
    95: {name: "Kika van Es", country: "Netherlands", searches: 1, id: 95}
    96: {name: "Ellie Carpenter", country: "Australia", searches: 1, id: 96}
    97: {name: "Lina Magull", country: "Germany", searches: 1, id: 97}
    98: {name: "Karen Bardsley", country: "England", searches: 1, id: 98}
    99: {name: "Jordyn Huitema", country: "Canada", searches: 1, id: 99}
  100: {name: "Tierna Davidson", country: "United States", searches: 1, id: 100}
*/

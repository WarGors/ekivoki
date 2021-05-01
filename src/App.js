import { Component } from 'react';
import './App.css';

const themes = [
  ['https://slotobzor.com/wp-content/uploads/2018/11/Kartochki-Ekivoki-versiya-2.0.pdf', 20],
  ['https://slotobzor.com/wp-content/uploads/2017/11/Ekivoki-kartochki-Futurama.pdf', 20],
  ['https://slotobzor.com/wp-content/uploads/2017/11/Kartochki-Ekivoki-lyubov-i-ee-konechnosti.pdf', 16],
  ['https://slotobzor.com/wp-content/uploads/2017/11/Kartochki-Ekivoki-Garri-Potter.pdf', 16],
  ['https://slotobzor.com/wp-content/uploads/2017/11/Kartochki-Ekivoki-simpsony.pdf', 20],
  ['https://slotobzor.com/wp-content/uploads/2017/11/Kartochki-Ekivoki-mir-oshhushhenij.pdf', 30],
  ['https://slotobzor.com/wp-content/uploads/2017/11/Kartochki-Ekivoki-sportivnaya-tema.pdf', 16],
  ['https://slotobzor.com/wp-content/uploads/2018/04/Kartochki-Ekivoki-seriya-Moda.pdf', 19],
  ['https://slotobzor.com/wp-content/uploads/2018/11/Kartochki-ekivoki-dopolnitelnye.pdf', 20]
]

const defaultState = {
  bone: 0,
  cardNumber: null,
  pageNumber: null,
  theme: null
}

class App extends Component {
  state = {...defaultState}

  onClickHandel = () => {
    const bone = Math.floor(Math.random() * 6) + 1
    const cardNumber = Math.floor(Math.random() * 8) + 1
    const state = {...defaultState}
    state.bone = bone

    if (bone === 6) {
      state.cardNumber = cardNumber
      state.pageNumber = Math.floor(Math.random() * themes[8][1] + 1)
      state.theme = themes[8][0]
      this.setState(state)
    } else {
      const themeNumber = Math.floor(Math.random() * 8)
      state.theme = themes[themeNumber][0]
      if (themeNumber) {
        state.pageNumber = Math.floor(Math.random() * themes[themeNumber][1] + 1)
        this.setState(state)
      } else {
        state.cardNumber = cardNumber
        state.pageNumber = Math.floor(Math.random() * themes[0][1] + 1)
        this.setState(state)
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div><button onClick={this.onClickHandel}>GO</button></div>
        <div>На кубике выпало: {this.state.bone}</div>
        <div>Страница: {this.state.pageNumber}</div>
        {this.state.cardNumber ? <div>Карта номер: {this.state.cardNumber}</div> : null}
        <div><a href={this.state.theme} target="_blank"><button>Открыть карту</button></a></div>
      </div>
    );
  }
  
}

export default App;

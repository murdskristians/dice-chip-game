const changeSelectedChip = ( value ) => this.selectedChip = value;
  
const addBet = ( optionNr ) => {
    //If not enough money to bet
    if (this.balance - this.selectedChip < 0) return;
    //If 2 options are already selected and want to select third
    if ( this.totalSelected >= 2 && this.selectedOptions[optionNr].selected === false ) return;

    this.selectedOptions[optionNr].selected = true;
    this.selectedOptions[optionNr].value += Number(this.selectedChip);
    
    this.balance -= Number(this.selectedChip);
    this.bet += Number(this.selectedChip);
}

const  repeatBet = () => {
    if (this.balance - this.bet < 0) return;

    this.balance -= this.bet;
    this.bet *= 2
}

const  undoBet = () => {
    this.balance += this.bet
    this.bet = 0

    this.selectedOptions = {
      1: {
        selected: false,
        value: 0
      },
      2: {
        selected: false,
        value: 0
      },
      3: {
        selected: false,
        value: 0
      },
      4: {
        selected: false,
        value: 0
      },
      5: {
        selected: false,
        value: 0
      },
      6: {
        selected: false,
        value: 0
      }
    }
}

const  totalSelected = () => {
    let num = Object.values(this.selectedOptions).filter( (a)=> a.selected == true)
    return num.length
}

exports.changeSelectedChip = changeSelectedChip;
exports.addBet = addBet;
exports.repeatBet = repeatBet;
exports.undoBet = undoBet;
exports.totalSelected = totalSelected;
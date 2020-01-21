function Fighter(fighter) {
    const _name = Symbol('name'), 
          _damage = Symbol('damage'),
          _hp = Symbol('hp'),
          _strength = Symbol('strength'),
          _agility = Symbol('agility'),
          _totalHp = Symbol('totalHp'),
          _wins = Symbol('wins'),
          _losses = Symbol('losses');

    this[_name] = fighter.name;
    this[_damage] = fighter.damage;
    this[_hp] = fighter.hp;
    this[_strength] = fighter.strength;
    this[_agility] = fighter.agility;
    this[_totalHp] = fighter.hp;
    this[_wins] = 0;
    this[_losses] = 0;

    this.getName = () => this[_name];
    this.getDamage = () => this[_damage];
    this.getStrength = () => this[_strength];
    this.getAgility = () => this[_agility];
    this.getHealth = () => this[_hp];

    this.attack = (opponent) => {
        const percentage = 100;

        const opponentPower = opponent.getStrength() + opponent.getAgility();
        const chanceToHit = percentage - opponentPower;

        if (Math.ceil(Math.random() * percentage) <= chanceToHit) {
            opponent.dealDamage(this[_damage]);
            console.log(`${this[_name]} makes ${this[_damage]} to ${opponent.getName()}`);
        } else {
            console.log(`${this[_name]} attack missed`);
        }

    };

    this.logCombatHistory = () => {
        console.log(`Name: ${this[_name]}, Wins: ${this[_wins]}, Losses: ${this[_losses]}`);
    }

    this.heal = (points) => {
        const newHealth = this[_hp] + points;

        this[_hp] = newHealth > this[_totalHp] ? this[_totalHp] : newHealth;
    }

    this.dealDamage = (points) => {
        const newHealth = this[_hp] - points;

        this[_hp] = newHealth < 0 ? 0 : newHealth;
    };

    this.addWin = () => {
        this[_wins] += 1;
    }

    this.addLoss = () => {
        this[_losses] += 1;
    }
}

const fight = (firstFighter, secondFighter) => {
    if(!firstFighter.getHealth() || !secondFighter.getHealth()) {
        console.error('Some fighter has no health');
        return;
    }

    while (firstFighter.getHealth() && secondFighter.getHealth()) {
        firstFighter.attack(secondFighter);

        if (secondFighter.getHealth()){
            secondFighter.attack(firstFighter);
        }
    }

    if (!firstFighter.getHealth()) {
        console.log(`${secondFighter.getName()} won!`);
        secondFighter.addWin();
        firstFighter.addLoss();
    } else {
        console.log(`${firstFighter.getName()} won!`)
        secondFighter.addLoss();
        firstFighter.addWin();
    }
};

const yura = new Fighter({name: 'Yura', damage: 20, hp: 120, strength: 20, agility: 25});
const nastya = new Fighter({name: 'Nastya', damage: 25, hp: 100, strength: 10, agility: 40});

fight(yura, nastya);
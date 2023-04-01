
// Resolva aqui, utilizando as classes criadas, os items a seguir:

const TWO_DOORS = 2;
const THREE_DOORS = 3;
const FOUR_DOORS = 4;
const FIVE_DOORS = 5;

abstract class Vehicle {
  constructor (
    public readonly model: string,
    public readonly year: number,
    private _mileage: number,
    private _doors: Door[],
    private _seats: number,
  ) {}
  
  public get mileage(): number { 
    /* validation to allow access to the attribute  */
    return this._mileage
  };
  public get doors(): number {
    /* validation to allow access to the attribute */
    return this._doors.length
  };
  public get seats(): number { 
    /* validation to allow access to the attribute */
    return this._seats
  };

  public increaseMileage = (newMileage: number): number => 
    newMileage > this._mileage ? newMileage : this._mileage;
};

abstract class Door {
  protected _isOpen: boolean = false;

  abstract open(): void;
  abstract close(): void;
}

class SlidingDoor extends Door {
  public open = (): void => {
    console.log('moves the door to the left');
    this._isOpen = true;
  };
  public close = (): void => {
    console.log('moves the door to the right');
    this._isOpen = false;
  }; 
}

class CommonDoor extends Door {
  public open = (): void => {
    console.log('moves the door away from the car');
    this._isOpen = true;
  }
  public close = (): void => {
    console.log('moves the door towards the car');
    this._isOpen = false;
  } 
}

class Car extends Vehicle {
  constructor (
    model: string,
    year: number,
    mileage: number,
    doors: Door[],
  ) {
    if (doors.every((object) => !(object instanceof CommonDoor))) 
      throw new Error('doors array must contain only instances of Door');
    if (doors.length !== TWO_DOORS && doors.length !== FOUR_DOORS)
      throw new Error('Cars must have two or four doors');
    
    super(model, year, mileage, doors, 5);
  };
}

class Van extends Vehicle {
  constructor (
    model: string,
    year: number,
    mileage: number,
    doors: Door[],
  ) {
    if (doors.every((object) => !(object instanceof CommonDoor) && !(object instanceof SlidingDoor)))
      throw new Error('doors array must contain only instances of CommonDoor or SlidingDoor');
    if (doors.length !== THREE_DOORS && doors.length !== FIVE_DOORS)
      throw new Error('Vans must have three or five doors');
    
    super(model, year, mileage, doors, 12);
  };
}

class Motorcycle extends Vehicle {
  constructor (
    model: string,
    year: number,
    mileage: number,
    doors: Door[]
  ) {
    if (doors.length !== 0) throw new Error('Motorcyles can\`t have doors');

    super(model, year, mileage, doors, 2);
  };
}

class Fleet {
  constructor (
    protected _name: string,
    protected _cnpj: string,
    private _vehicles: Vehicle[],
  ) {
    if (!_name || !_cnpj || !_vehicles) throw new Error('The fleet\'s attributes can\t be undefined');
    if (_vehicles.length === 0) throw new Error('A fleet must have vehicles');
  };

  public get name(): string {
    /* validation to allow access to the attribute  */
    return this._name
  };

  public get cnpj(): string {
    /* validation to allow access to the attribute  */
    return this._cnpj
  };

  public get vehicles(): Vehicle[] {
    /* validation to allow access to the attribute  */
    return this._vehicles
  };

  public totalVehicles = (): number => this._vehicles.length;

  public typeOfCar = (doorsNumber: number): number => this._vehicles
    .filter((vehicle) => 
      vehicle instanceof Car && vehicle.doors === doorsNumber).length;

  public totalSeats = (): number => this._vehicles
    .reduce((acc, vehicle) => acc + vehicle.seats, 0);

  public averageMileage = (): number => this._vehicles
    .reduce((acc, vehicle) => (acc + vehicle.mileage), 0) / this._vehicles.length;

  public getNewestVehicles = (): Vehicle[] => {
    const currentYear = new Date().getFullYear();
    return this._vehicles.filter((vehicle) => vehicle.year === currentYear); 
  }

  public getHighestMileage = (): Vehicle[] => {
    const highestMileage = this._vehicles
      .map((vehicle) => vehicle.mileage).sort((a, b) => (b - a));

    return this._vehicles.filter((vehicle) => vehicle.mileage === highestMileage[0])
  }

  public getOldestVehicles = (): Vehicle => [...this._vehicles].sort((vehicleA, vehicleB) =>
    vehicleA.year - vehicleB.year)[0];
  
  public amountOfVehiclesByType = (type: typeof Vehicle): number => this._vehicles
    .filter((vehicle: Vehicle) => vehicle instanceof type).length;
}

const threeDoorsVan = [new SlidingDoor(), new CommonDoor(), new CommonDoor()];
const fiveDoorsVan = [new SlidingDoor(), new CommonDoor(), new CommonDoor(), new CommonDoor(), new CommonDoor()];
const twoDoorsCar = [new CommonDoor(), new CommonDoor()];
const fourDoorsCar = [new CommonDoor(), new CommonDoor(), new CommonDoor(), new CommonDoor()];

const fleetOneVehicles = [
  new Van('Ford Transit', 2008, 97080, threeDoorsVan),
  new Van('Citroën Jumper', 2008, 95000, threeDoorsVan),
  new Van('Citroën Jumper', 2012, 17000, threeDoorsVan),
  new Van('Citroën Jumper', 2023, 0, threeDoorsVan),
  new Van('Fiat Ducato', 2006, 15000, fiveDoorsVan),
  new Car('Fiat Palio', 2009, 15000, twoDoorsCar),
  new Car('Fiat Palio', 2009, 25000, twoDoorsCar),
  new Car('Ford Ká', 2015, 76560, fourDoorsCar),
  new Car('Chevrolet Onix', 2010, 15000, fourDoorsCar),
  new Motorcycle('Yamaha Flup', 2023, 0, []),
];

const fleetTwoVehicles = [
  new Van('Ford Transit', 2018, 65000, threeDoorsVan),
  new Van('Fiat Ducato', 2007, 15400, threeDoorsVan),
  new Car('Fiat Palio', 2019, 35000, twoDoorsCar),
  new Car('Chevrolet Onix', 2012, 65000, fourDoorsCar),
  new Motorcycle('Yamaha Flup', 2023, 0, []),
  new Motorcycle('Yamaha Flup', 2023, 10000, []),
  new Motorcycle('Yamaha Flup', 2022, 5500, []),
  new Motorcycle('Honda CB300', 2023, 0, []),
];

const fleet1 = new Fleet('Cooperativa de veículos CMCar LTDA', '03.019.756/0001-70', fleetOneVehicles);
const fleet2 = new Fleet('Consórcio de veículos CMCar S.A', '26.402.504/0001-21', fleetTwoVehicles);

// a) A quantidade de veículos da frota 1. Resposta: 10
const totalVehiclesfleet1 = fleet1.totalVehicles();
console.log(totalVehiclesfleet1);

// b) A quantidade de carros com 4 portas na empresa. Resposta: 3
const totalCarsWithFourDoors = fleet1.typeOfCar(4) + fleet2.typeOfCar(4);
console.log(totalCarsWithFourDoors);

// c) O total de lugares (capacidade) disponíveis da frota 1. Resposta: 82
const totalSeatsFleet1 = fleet1.totalSeats();
console.log(totalSeatsFleet1);

// d) A média de quilômetros rodados de todos os veículos da frota 2. Resposta: 24.487,5
const mileageAverage = fleet2.averageMileage();
console.log(mileageAverage);

// e) O(s) veículo(s) mais novo(s) da frota 1 (retornar em forma de lista, pois pode haver mais de um). Resposta: Veiculo 4 e Veiculo 10
const newestVehiclesInFleet1 = fleet1.getNewestVehicles();
console.log(newestVehiclesInFleet1);

// f) O(s) veículo(s) mais rodado(s) da frota 2 (retornar em forma de lista, pois pode haver mais de um). Resposta: Veiculo 11 e Veiculo 14
const highestMileageVehiclesFleet2 = fleet2.getHighestMileage();
console.log(highestMileageVehiclesFleet2);

// g) O(s) veículo(s) mais antigo(s) da empresa (retornar em forma de lista, pois pode haver mais de um). Resposta: Veiculo 5
const oldestVehicleFleet1 = fleet1.getOldestVehicles().year;
const oldestVehicleFleet2 = fleet2.getOldestVehicles().year;
const companysOldestVehicle = oldestVehicleFleet1 < oldestVehicleFleet2 ?
  fleet1.getOldestVehicles() : fleet2.getOldestVehicles()

console.log(companysOldestVehicle);

// h) A frota com a maior quantidade de vans (retornar em forma de lista, pois pode haver mais de um) Resposta: Frota 1
const amountVanFleet1 = fleet1.amountOfVehiclesByType(Van);
const amountVanFleet2 = fleet2.amountOfVehiclesByType(Van);
const highestAmountOfVans = amountVanFleet1 < amountVanFleet2 ? fleet2 : fleet1;

console.log(highestAmountOfVans);

/* TESTES */

class NotDoor extends Door {
  protected _isOpen: boolean = false;

  open(): void { console.log('not a door') };
  close(): void{ console.log('not a door') };
}

const notDoor = new Van('Ford Transit', 2018, 0, [new NotDoor()])
console.log(notDoor); // ERRO

const notDoor2 = new Car('Fiat Palio', 2009, 0, [new NotDoor()])
console.log(notDoor2); // ERRO

const motorcycleWithDoors = new Motorcycle('Honda', 2023, 0, [new CommonDoor()]);
console.log(motorcycleWithDoors); // ERRO

const carWithOneDoor = new Car('Chevrolet Onix', 2010, 15000, [new CommonDoor()]);
console.log(carWithOneDoor); // ERRO

const vanWithTwoDoors = new Van('Ford Transit', 2018, 65000, [new CommonDoor(), new SlidingDoor()]);
console.log(vanWithTwoDoors); // ERRO

const emptyFleet = new Fleet('Cooperativa de veículos CMCar LTDA', '03.019.756/0001-70', []);
console.log(emptyFleet); // ERRO

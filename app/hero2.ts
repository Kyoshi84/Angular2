export class Hero2 {
	id: number;
	name: string;
	age: number;

	constructor(id: number, name: string, age: number) {
		this.id = id;
		this.name = name;
		this.age = age;

	}

	consoleHero2 () {
		console.log(this.id);
		console.log(this.name);
		console.log(this.age);
	}



}
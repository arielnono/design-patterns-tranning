import {Display} from './Display';
import {Observer} from './Observer';
import { WeatherDataType } from '../subject/WeatherDataType';

export class CurrentConditions extends Observer implements Display {
  private temperature:string;
  private humidity: string;
  private airPressure: string;

  constructor() {
    super('CurrentConditions');

    this.humidity="";
    this.temperature="";
    this.airPressure="";
  }

  display(): void {
    console.log(`\n[${this.getName()}]: temperature: ${this.temperature} humidity: ${this.humidity} air pressure: ${this.airPressure}`);
  }

  updateObserver(weatherData: WeatherDataType): void {
    this.humidity = weatherData.humidity;
    this.temperature = weatherData.temperature;
    this.airPressure = weatherData.airPressure;

    this.display();
  }
}
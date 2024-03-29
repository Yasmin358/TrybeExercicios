const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);


const sendMarsTemperature = (something) => {
    const temperature = getMarsTemperature();
    if(something === temperatureInFahrenheit){
        temperatureInFahrenheit(temperature);
    }else{
      greet(temperature);
    }
  
}

setTimeout(() => sendMarsTemperature(temperatureInFahrenheit), messageDelay());
setTimeout(() => sendMarsTemperature(greet), messageDelay());

// imprime "Mars temperature is: 20 degree Celsius", por exemplo

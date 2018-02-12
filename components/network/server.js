import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

const PlaceJsonData = 'http://159.65.8.158/web/place.json';
const WordJsonData = 'http://159.65.8.158/web/word.json';
const WeatherData = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=d501f3d7960cce45e9afc07834e6eff6';

async function getPlaceFromServer() {
    try {
       let response = await fetch(PlaceJsonData);
       let responseJson = await response.json();
       return responseJson;
    } catch(error) {
        console.error(`Error is : ${error}`);
    }
}

async function getWordFromServer() {
    try {
        let response = await fetch(WordJsonData);
        let responseJson = await response.json();
        return responseJson;
     } catch(error) {
         console.error(`Error is : ${error}`);
    }
}

async function getWeatherFromServer(weather){
    let weatherData = "https://api.darksky.net/forecast/3e682e934a9492cf93bf3b189f45b20f/" + weather;
    try {
        let response = await fetch(weatherData);
        let responseJson = await response.json();
        return responseJson;
     } catch(error) {
         console.error(`Error is : ${error} and ${weatherData}`);
    }
}
export {getPlaceFromServer};
export {getWordFromServer};
export {getWeatherFromServer};
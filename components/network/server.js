import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

const PlaceJsonData = 'http://159.65.8.158/web/place.json';
const WordJsonData = 'http://159.65.8.158/web/word.json';

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

export {getPlaceFromServer};
export {getWordFromServer};
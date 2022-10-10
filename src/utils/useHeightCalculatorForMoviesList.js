import { useState, useRef } from 'react';

import { desktopSettings, mobailSettings } from '../constants/heightCalculatorSettings';

export const useHeightCalculatorForMoviesList = () => {

  const [moviesListHeight, setMoviesListHeight] = useState(0);
  const [areThereAnyMovies, setAreThereAnyMovies] = useState(null);

  const settings = useRef(null);
  const moviesNumber = useRef(0);
  const moviesCounter = useRef(0);
  const intermediateHeight = useRef(null);
  const isDesktop = useRef(document.body.clientWidth > 380 ? true : false);
  const isMobail = useRef(document.body.clientWidth > 380 ? false : true);

  
  const resetSettingsForCalculation = ({ isCurrentDesktop, isCurrentMobail }) => {
      const { cardHeigth,  cardsNumberInSection, padding } = settings.current;
      const currentHeight = document.querySelector('.card-list').clientHeight - padding;
      let  numberOfRenderedCards = Math.ceil(currentHeight / cardHeigth);
      if (numberOfRenderedCards === cardsNumberInSection) {
        numberOfRenderedCards = numberOfRenderedCards === desktopSettings.cardsNumberInSection ?
                                 mobailSettings.cardsNumberInSection : desktopSettings.cardsNumberInSection;
      };

      isDesktop.current = !isDesktop.current;
      isMobail.current = !isMobail.current;
      settings.current = document.body.clientWidth > 380 ? desktopSettings : mobailSettings;

      recalculateHeight(numberOfRenderedCards);
  };

  const recalculateHeight = (numberOfRenderedCards) => {
    const height = numberOfRenderedCards * settings.current.cardHeigth;
    setMoviesListHeight(height);
    intermediateHeight.current = height;

    const moviesRemainder = moviesNumber.current - numberOfRenderedCards;
    if (moviesRemainder) {
      setAreThereAnyMovies(true);
    } else {
      setAreThereAnyMovies(false);
    };
  };

  const calculateHeight = () => {
    const { cardsNumberInSection, cardHeigth } = settings.current;
    let counter = moviesCounter.current;

    if (counter >= cardsNumberInSection) {
      const heightIncrement = cardsNumberInSection * cardHeigth;
      const height =  intermediateHeight.current + heightIncrement;
      setMoviesListHeight(height);
      moviesCounter.current -= cardsNumberInSection;
      intermediateHeight.current += heightIncrement;
      setAreThereAnyMovies(true);
    } else {
      const heightIncrement = counter * cardHeigth;
      const height = intermediateHeight.current + heightIncrement;
      setMoviesListHeight(height);
      moviesCounter.current = 0;
      intermediateHeight.current += heightIncrement;
      setAreThereAnyMovies(false);
    }
  };

  const setDataForCalculation = (screenWidth, numberOfMovies) => {
    settings.current = screenWidth > 380 ? desktopSettings : mobailSettings;
    moviesNumber.current = numberOfMovies;
    moviesCounter.current = numberOfMovies;
    intermediateHeight.current = 0;
  };
  
  return { moviesListHeight, areThereAnyMovies, setDataForCalculation, resetSettingsForCalculation, calculateHeight };
};

/**
 * [HTTP 통신]
 * npm i axios
 *
 *
 * $ npx pod-install ios
 */

import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getPopularMovies} from './services/services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        // console.log('movies : ', JSON.stringify(movies[0], null, 2));
        setMovie(movies[0]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text>Movie Name: {movie.original_title}</Text>
      <Text>Language: {movie.original_language}</Text>
      <Text>Release Data: {movie.release_date}</Text>
      {error && <Text style={{color: 'red'}}>Error in the server</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

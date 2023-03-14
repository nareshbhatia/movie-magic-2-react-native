import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {Button} from '../../components/Button';
import {Screen} from '../../components/Screen';
import {MovieItem} from './MovieItem';
import {useMovies} from './useMovies';

export function Top10MoviesScreen() {
  const navigation = useNavigation();
  const {isLoading, movies} = useMovies();

  const handleSignOut = () => {
    navigation.navigate('Home', {});
  };

  const handleItemPressed = (movieId: string) => {
    console.log(movieId);
  };

  return (
    <Screen>
      <View className="h-16 flex flex-row items-center px-4">
        <Text className="flex-1 text-xl text-brand font-semibold">
          Top 10 Movies Of All Time
        </Text>
        <Button onPress={handleSignOut}>Sign out</Button>
      </View>

      <View className="px-4">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={movies}
            renderItem={({item}) => (
              <MovieItem movie={item} onItemPressed={handleItemPressed} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </Screen>
  );
}

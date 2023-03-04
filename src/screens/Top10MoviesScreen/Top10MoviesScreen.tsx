import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieItem} from './MovieItem';
import {useMovies} from './useMovies';

function ItemSeparator() {
  return <View className="h-px w-full bg-gray-300" />;
}

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
    <SafeAreaView>
      <View className="h-16 flex flex-row items-center px-4">
        <Text className="flex-1 text-2xl text-brand font-semibold">
          Top 10 Movies Of All Time
        </Text>
        <Button title="Sign out" onPress={handleSignOut} />
      </View>

      <View className="p-4">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={movies}
            renderItem={({item}) => (
              <MovieItem movie={item} onItemPressed={handleItemPressed} />
            )}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}
            className="mt-3"
          />
        )}
      </View>
    </SafeAreaView>
  );
}

import * as React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Movie} from '../../models';

interface MovieItemProps {
  movie: Movie;
  onItemPressed: (movieId: string) => void;
}

export function MovieItem({movie, onItemPressed}: MovieItemProps) {
  return (
    <Pressable
      onPress={() => {
        onItemPressed(movie.id);
      }}>
      <View className="py-2">
        <View className="bg-surface border border-transparent rounded-xl flex flex-row overflow-hidden">
          <View className="flex-none w-32 relative">
            <Image
              className="object-cover"
              source={{uri: movie.photoUrl}}
              alt={movie.name}
              style={{height: 200, width: 128}}
            />
          </View>
          <View className="flex-auto ml-2 px-6 py-2">
            <View className="flex flex-row flex-wrap">
              <Text className="flex-auto text-lg leading-6 font-semibold">
                {movie.name}
              </Text>
              <View className="flex text-lg font-semibold">
                <Text>{movie.rating.toFixed(1)}</Text>
              </View>
              <Text className="mt-1 w-full flex-none font-medium">
                {movie.year}
              </Text>
              <Text className="mt-3 text-sm">{movie.logline}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

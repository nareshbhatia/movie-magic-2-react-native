import * as React from 'react';
import {Pressable, Text, View} from 'react-native';
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
      <View className="py-3">
        <View className="flex flex-row">
          <View className="flex flex-col flex-1">
            <Text className="text-lg font-bold" numberOfLines={1}>
              {movie.name}
            </Text>
            <Text className="text-base">{movie.year}</Text>
          </View>
          <View className="w-8" />
          <Text className="text-base">{movie.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

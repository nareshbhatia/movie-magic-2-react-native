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
              style={{height: 220, width: 128}}
            />
          </View>
          <View className="flex-auto px-4 py-2">
            <View className="flex flex-row">
              <Text className="flex-auto text-base leading-5 font-semibold">
                {movie.name}
              </Text>
              <View className="ml-2 flex flex-row">
                <Text className="text-base leading-5 font-semibold">
                  {movie.rating.toFixed(1)}
                </Text>
              </View>
            </View>
            <Text className="w-full flex-none text-sm font-medium">
              {movie.year}
            </Text>
            <Text className="mt-2 text-sm">{movie.logline}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

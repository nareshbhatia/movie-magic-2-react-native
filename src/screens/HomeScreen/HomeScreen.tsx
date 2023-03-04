import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, View} from 'react-native';
import {Header} from '../../components/Header';

export function HomeScreen() {
  return (
    <SafeAreaView className="mx-auto max-w-7xl">
      <Header />
      <View className="lg:relative lg:mt-6">
        <View className="mx-auto max-w-7xl pt-16 pb-20 lg:py-48">
          <View className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <Text className="text-center lg:text-left text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Unlimited movies
            </Text>
            <Text className="text-center lg:text-left text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-brand">
              anytime, anywhere
            </Text>
            <Text className="text-center lg:text-left mx-auto mt-3 max-w-md text-lg text-neutral-500 sm:text-xl md:mt-5 md:max-w-3xl">
              From heart-pumping action to tear-jerking dramas, we&apos;ve got
              it all. So grab your popcorn and settle in for an unforgettable
              cinematic experience.
            </Text>
          </View>
        </View>
        <View className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            source={{uri: 'https://i.imgur.com/YEyeoVQ.jpg'}}
            alt="Couple watching a movie on TV"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

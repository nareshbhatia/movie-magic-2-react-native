import clsx from 'clsx';
import {Pressable, PressableProps, Text, TextProps} from 'react-native';

const variantStyles: {[variant: string]: string} = {
  primary: 'bg-brand text-onbrand shadow-sm',
  secondary: 'bg-secondary text-onsecondary',
};

type PropsWithoutConflicts = Omit<PressableProps, 'children' | 'style'> &
  Omit<TextProps, 'onLongPress' | 'onPress' | 'onPressIn' | 'onPressOut'>;

interface ButtonProps extends PropsWithoutConflicts {
  variant?: string;
  className?: string;
}

export function Button({
  variant = 'primary',
  className,
  children,
  android_disableSound,
  android_ripple,
  unstable_pressDelay,
  delayLongPress,
  disabled,
  hitSlop,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  pressRetentionOffset,
  testOnly_pressed,
  ...props
}: ButtonProps) {
  className = clsx(
    'flex flex-row items-center justify-center overflow-hidden px-6 py-2 text-sm text-center font-medium border-none rounded-md',
    variantStyles[variant],
    className,
  );

  return (
    <Pressable
      android_disableSound={android_disableSound}
      android_ripple={android_ripple}
      unstable_pressDelay={unstable_pressDelay}
      delayLongPress={delayLongPress}
      disabled={disabled}
      hitSlop={hitSlop}
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      pressRetentionOffset={pressRetentionOffset}
      testOnly_pressed={testOnly_pressed}>
      <Text className={className} {...props}>
        {children}
      </Text>
    </Pressable>
  );
}

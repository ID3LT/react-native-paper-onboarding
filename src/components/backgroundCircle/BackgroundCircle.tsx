import React, { memo } from 'react';
import { ViewStyle } from 'react-native';
import { Circle, CircleProps } from 'react-native-svg';
import Animated, { add, Extrapolate } from 'react-native-reanimated';
import type { BackgroundCircleProps } from '../../types';

const {
  interpolate: interpolateV1,
  interpolateNode: interpolateV2,
} = require('react-native-reanimated');
const interpolate = interpolateV2 || interpolateV1;

const AnimatedCircle = Animated.createAnimatedComponent(
  Circle
) as React.ComponentClass<
  Animated.AnimateProps<ViewStyle, CircleProps & { style?: any }>
>;
const BackgroundCircleComponent = ({
  index,
  animatedIndex,
  color,
  extendedSize,
  bottomPosition,
  indicatorSize,
  animatedIndicatorsContainerPosition,
}: BackgroundCircleProps) => {
  //#region variables
  //#endregion

  //#region animations
  const animatedFocus = interpolate(animatedIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 2],
    extrapolate: Extrapolate.CLAMP,
  });
  const animatedRadius = interpolate(animatedFocus, {
    inputRange: [0, 1],
    outputRange: [0, extendedSize],
    extrapolate: Extrapolate.CLAMP,
  });
  const animatedLeftPosition = add(
    animatedIndicatorsContainerPosition,
    indicatorSize / 2,
    index * indicatorSize
  );
  //#endregion

  // render
  return (
    <AnimatedCircle
      r={animatedRadius}
      cy={bottomPosition}
      cx={animatedLeftPosition}
      fill={color}
    />
  );
};

const BackgroundCircle = memo(BackgroundCircleComponent);

export default BackgroundCircle;

import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View
} from "react-native";

const placeholder = require("./assets/placeholder.png");

type PlaceholderProps = {
  loaded: boolean;
  style: StyleProp<ImageStyle>;
};

function Placeholder({ loaded, style }: PlaceholderProps) {
  if (loaded) {
    return null;
  } else {
    return <Image style={style} source={placeholder} />;
  }
}

type Props = {
  style: StyleProp<ImageStyle>;
  source: ImageSourcePropType | null;
};

export default function LazyImage({ style, source }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={style}>
      <Placeholder loaded={loaded} style={style} />
      {!!source && (
        <Image
          source={source}
          style={[StyleSheet.absoluteFill]}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      )}
    </View>
  );
}

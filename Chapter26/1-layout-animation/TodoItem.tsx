import { Text, Pressable } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { styles } from "./styles";

export type Todo = {
  id: string;
  title: string;
};

type TodoItemProps = Todo & {
  onPress: (id: string) => void;
};

export const TodoItem = ({ id, title, onPress }: TodoItemProps) => {
  return (
    <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
      <Pressable onPress={() => onPress(id)} style={styles.todoItem}>
        <Text>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

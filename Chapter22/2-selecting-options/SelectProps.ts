import { PickerProps } from "@react-native-picker/picker";

export type SelectItem<T extends any> = {
  label: string;
  value: T | null;
};

export type SelectProps = PickerProps<string | number | null> & {
  label: string;
  items: SelectItem<string | number>[];
};

export interface InputEvent {
  target: {
    value: string;
  };
}

export interface BlurEvent {
  target: {
    name: string;
  };
}

export interface CheckboxChangeEvent {
  target: {
    checked: boolean;
  };
}

export interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {}
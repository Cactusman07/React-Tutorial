// src/ts/selectors/selectors.tsx

// Selector that gets Value from State
export const getValueState = (store: any) => store.value;

// Selector that gets Name from State
export const getNameState = (store: any) => store.name;

// Selector that gets Introductory Text from State
export const getIntroTextState = (store: any) => store.introText;

// Selector that gets Introductory Text from State
export const getIntroButtonState = (store: any) => store.showIntroButton;

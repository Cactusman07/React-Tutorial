// src/ts/selectors/selectors.tsx

// Selector that gets Value from State
export const getValueState = (store: any) => store.value;

// Selector that gets Name from State
export const getNameState = (store: any) => store.name;

// Selector that gets Introductory Text from State
export const getIntroTextState = (store: any) => store.introText;

// Selector that gets IntroButton State from State
export const getIntroButtonState = (store: any) => store.showIntroButton;

// Selector that gets Profile info from State
export const getProfiles = (store: any) => store.profiles;
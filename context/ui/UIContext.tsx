import { createContext } from 'react';

interface ContextProps {
     sidemenuOpen: boolean;

     openSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps );
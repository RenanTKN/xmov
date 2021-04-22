import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

export interface User {
  name: string;
  email: string;
  image: string;
}

interface UserContextData {
  email: string;
  image: string;
  name: string;
  isAuthenticated: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
  isAuthenticated: boolean;
  email: string;
  name: string;
  image: string;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children, ...rest }: UserProviderProps) => {
  const [name, setName] = useState<string>(rest.name ?? "");
  const [image, setImage] = useState<string>(rest.image ?? "");
  const [email, setEmail] = useState<string>(rest.email ?? "");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    rest.isAuthenticated ?? false
  );

  const logout = () => {
    Cookies.remove("name");
    Cookies.remove("image");
    Cookies.remove("email");
    Cookies.remove("isAuthenticated");
    
    setName("");
    setImage("");
    setEmail("");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    Cookies.set("name", name);
    Cookies.set("image", image);
    Cookies.set("email", email);
    Cookies.set("isAuthenticated", String(isAuthenticated));
  }, [name, image, email, isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        email,
        image,
        name,
        isAuthenticated,
        setEmail,
        setImage,
        setName,
        setIsAuthenticated,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

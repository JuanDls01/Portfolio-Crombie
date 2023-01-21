import { useThemeContext } from "../../Context/ThemeContext";
import ConfigureCards from "./components/ConfigureCards";

import Paginated from "./components/Paginated";
import ProjectCards from "./components/ProjectCards";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='w-full h-full max-w-[1280px] py-3 px-4 flex flex-col '>
        <h1 className={`${theme} text-4xl font-bold mb-5`}>Projects</h1>
        <ProjectCards />
        <ConfigureCards />
        <Paginated />
      </div>
    </div>
  );
};
export default Home;

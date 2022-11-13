import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className="p-1 flex items-center">
      <div className="flex justify-center items-center transition-all hover:bg-blue-700 p-1 border-cyan-900 rounded-lg hover:text-white cursor-pointer w-10 h-10">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="flex flex-1 justify-center">
        <div>Project Manager 🚀</div>
      </div>
    </nav>
  );
};

export default Header;

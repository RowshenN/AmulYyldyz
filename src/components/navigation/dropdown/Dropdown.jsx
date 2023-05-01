import { Collapse } from 'antd';
import './Dropdown.css'
import { useContext } from 'react';

const { Panel } = Collapse;
const App = () => (
  
  <div className="collapseContainer">
    <Collapse accordion>
      <Panel >
      <div className="navItemsConatiner">
        <p className="navItem">Homepage</p>
        <p className="navItem">Products</p>
        <p className="navItem">Favourites</p>
        <p className="navItem">Contact</p>
        <p className="navItem"></p>
      </div>
      </Panel>
    </Collapse>
  </div>
  
);

export default App; 

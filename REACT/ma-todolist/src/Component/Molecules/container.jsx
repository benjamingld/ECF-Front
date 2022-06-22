import List from './list';
import Input from '../Atoms/input'
import AddList from '../Atoms/addList'


const Container = () => {
    return (
      <div>
        <Input style={{border:"2px solid black"}}/>
        <AddList/>
        <List/>
      </div>
    );
  }
  
  export default Container;
  
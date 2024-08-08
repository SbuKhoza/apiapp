import NewsGrid from './components/NewsGrid'
import Menu from './components/Menu'
import Chelsea from './Chelsea';

function App() {
  return (
    <div className='App'>
      <div className='app-cont'>
      <header><Menu/></header>
      <NewsGrid/>
      
      </div> 
    </div>
  );
}

export default App
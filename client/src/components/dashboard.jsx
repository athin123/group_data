import '../assets/stylesheets/dashboard.css';
import Sidebar from '../layout/Sidebar/Sidebar';
import Content from '../layout/Content/Content';

const dashboard = () => {
  return (
      <div className='dashboard'>
        <Sidebar />
        <Content />
      </div>
  )
}

export default dashboard

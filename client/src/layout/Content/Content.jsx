import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';

const Content = () => {
  return (
    <div className='main-content'style={{overflow:"hidden"}}>
      <div>
        <ContentTop />
      </div>
      <div class="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Content

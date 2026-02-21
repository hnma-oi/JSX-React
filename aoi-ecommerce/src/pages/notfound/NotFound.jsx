import './NotFound.css';
import aoiPicture from '../../assets/aoi.jpg';

export function NotFound() {
    return (
       <div className="not-found-container">

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="glass-card">
        
        {/* Avatar */}
        <div className="avatar-container">
             <img 
              src={aoiPicture}
              alt="Aoi Lost" 
              className="avatar-img"
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.parentNode.style.display = 'flex';
                e.target.parentNode.style.alignItems = 'center';
                e.target.parentNode.style.justifyContent = 'center';
                e.target.parentNode.style.color = 'white';
                e.target.parentNode.innerHTML = '🌸';
              }} 
            />
        </div>

        <h1 className="title-404">#404</h1>
        
        <h2 className="subtitle">
          迷子のお知らせ
        </h2>

        <p className="description">
          申し訳ありません。<br/>
          お探しのページは存在しないか、移動したようです。<br/>
          葵もここがどこだか分かりません... 😢
        </p>

        <a href="/" className="home-button">
          ホームに戻る
        </a>

      </div>
    </div>
    )
}
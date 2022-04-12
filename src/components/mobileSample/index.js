import mobilesample from 'assets/i6.svg';
import playStorebutton from 'assets/appstore-button.svg';
import twitterIcon from 'assets/twitter-logo.svg';
import facebookIcon from 'assets/facebook-logo.svg';

import './styles.scss';

const MobileSample = () => {
  return (
    <div className="mobile-container">
      <div className="mobile-sample">
        <img src={mobilesample} alt="mobileview" />
      </div>
      <div className="playstore-button">
        <img src={playStorebutton} alt="play store" />
      </div>
      <div className="social-media">
        <img src={facebookIcon} alt="facebook" />
        <img src={twitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default MobileSample;

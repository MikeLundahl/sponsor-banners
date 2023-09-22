import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class BannerMobile extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.adImage = `/assets/${app.forum.attribute('image-mobile')}`
    this.bannerTag = vnode.attrs.bannerPlausibleTag;
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    vnode.dom.querySelector('.BannerMobile').style.backgroundImage = `url(${this.adImage})`;
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
      <div className="BannerMobile-container">
        <h4 className="BannerSide-title">Sponsor</h4>
        <Link href="https://www.google.com" target="_blank" className={this.bannerTag}>
          <div className="BannerMobile">
          </div>
        </Link>
      </div>
    );
  }
}

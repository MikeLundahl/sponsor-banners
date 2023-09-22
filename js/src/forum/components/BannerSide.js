import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class BannerSide extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.adImage = `/assets/${app.forum.attribute('image-side')}`
    this.bannerTag = vnode.attrs.bannerPlausibleTag;
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    vnode.dom.querySelector('.BannerSide').style.backgroundImage = `url(${this.adImage})`;
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
      <div className="BannerSide-container">
        <h4 className="BannerSide-title">Sponsor</h4>
        <Link href="https://www.google.com" target="_blank" className={this.bannerTag}>
          <div className="BannerSide">
          </div>
        </Link>
      </div>
    );
  }
}

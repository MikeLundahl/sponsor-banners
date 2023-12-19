import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class BannerSide extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.adImage = `/assets/${app.forum.attribute('mbl-sponsor-banners.image-side')}`
    this.bannerLink = vnode.attrs.bannerLink;
    this.bannerTag = vnode.attrs.bannerPlausibleTag;
    this.titleText = vnode.attrs.titleText;
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
        <h4 className="BannerSide-title">{this.titleText}</h4>
        <Link href={this.bannerLink} target="_blank" className={this.bannerTag}>
          <div className="BannerSide">
          </div>
        </Link>
      </div>
    );
  }
}

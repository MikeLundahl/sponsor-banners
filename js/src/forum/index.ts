import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import BannerSide from './components/BannerSide';
import BannerMobile from './components/BannerMobile';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import validatePromotion from "../utils/validatePromotion";

app.initializers.add('mbl/sponsor-banners', () => {
    extend(IndexPage.prototype, 'sidebarItems', (items) => {
      const isValidForPromotion = validatePromotion()
      const bannersLink = app.forum.attribute('mbl-sponsor-banners.banners-link')
      const bannerLandingTag = app.forum.attribute('mbl-sponsor-banners.banner-landing-tag')
      const bannerMobileTag = app.forum.attribute('mbl-sponsor-banners.banner-mobile-tag')
      const titleText = app.forum.attribute('mbl-sponsor-banners.title-text')

      const sideIsDisplaying = parseInt(app.forum.attribute('mbl-sponsor-banners.side-is-displaying'))
      const mobileIsDisplaying = parseInt(app.forum.attribute('mbl-sponsor-banners.mobile-is-displaying'))

      if( isValidForPromotion ) {
        if ( sideIsDisplaying ) {
          items.add('mbl-sponsor-banner-side', m(BannerSide, { bannerPlausibleTag: bannerLandingTag, bannerLink: bannersLink, titleText: titleText }));
        }
        if ( mobileIsDisplaying ) {
          items.add('mbl-sponsor-banner-mobile', m(BannerMobile, { bannerPlausibleTag: bannerMobileTag, bannerLink: bannersLink, titleText: titleText }));
        }
      }
    });

    extend(DiscussionPage.prototype, 'sidebarItems', (items) => {
      const isValidForPromotion = validatePromotion()
      const bannersLink = app.forum.attribute('mbl-sponsor-banners.banners-link')
      const bannerDiscussionTag = app.forum.attribute('mbl-sponsor-banners.banner-discussion-tag')
      const discussionIsDisplaying = parseInt(app.forum.attribute('mbl-sponsor-banners.discussion-is-displaying'))
      const titleText = app.forum.attribute('mbl-sponsor-banners.title-text')

      if ( isValidForPromotion && discussionIsDisplaying) {
        items.add('mbl-sponsor-banner-discussion', m(BannerSide, { bannerPlausibleTag: bannerDiscussionTag, bannerLink: bannersLink, titleText: titleText }), -100);
      }

    });


});

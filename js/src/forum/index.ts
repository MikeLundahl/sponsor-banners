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
      const bannerLandingTag = app.forum.attribute('banner-landing-tag')
      const bannerMobileTag = app.forum.attribute('banner-mobile-tag')

      //TODO: add plausible tags
      if( isValidForPromotion ) {
        items.add('mbl-sponsor-banner-side', m(BannerSide, { bannerPlausibleTag: bannerLandingTag }));
        items.add('mbl-sponsor-banner-mobile', m(BannerMobile, { bannerPlausibleTag: bannerMobileTag }));
      }
    });

    extend(DiscussionPage.prototype, 'sidebarItems', (items) => {
      const isValidForPromotion = validatePromotion()
      const bannerDiscussionTag = app.forum.attribute('banner-discussion-tag')

      if ( isValidForPromotion ) {
        items.add('mbl-sponsor-banner-discussion', m(BannerSide, { bannerPlausibleTag: bannerDiscussionTag }), -100);
      }

    });


});

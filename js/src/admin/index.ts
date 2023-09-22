import app from 'flarum/admin/app';

app.initializers.add('mbl/sponsor-banners', () => {
  console.log('[mbl/sponsor-banners] Hello, admin!')

  app.extensionData.for('mbl-sponsor-banners')
    .registerSetting({
      setting: 'mbl-sponsor-banners.is-displaying',
      label: 'Display',
      type: 'checkbox'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.banner-side-image',
      label: 'Banner Side Image',
      type: 'text'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.banner-mobile-image',
      label: 'Banner Mobile Image',
      type: 'text'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.banner-side-link',
      label: 'Banner Side Link',
      type: 'text'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.banner-landing-tag',
      label: 'Banner Landing Tag (Plausible.io)',
      type: 'text'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.banner-discussion-tag',
      label: 'Banner Discussion Tag (Plausible.io)',
      type: 'text'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.banner-mobile-tag',
      label: 'Banner Mobile Tag (Plausible.io)',
      type: 'text'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.start-date',
      label: 'Start Date',
      type: 'date'
    })
    .registerSetting({
      setting: 'mbl-sponsor-banners.end-date',
      label: 'End Date',
      type: 'date'
    })
});

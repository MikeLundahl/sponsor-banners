<?php

/*
 * This file is part of mbl/sponsor-banners.
 *
 * Copyright (c) 2023 Mike Lundahl.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Mbl\SponsorBanners;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings())
        ->serializeToForum('mbl-sponsor-banners.image-side', 'mbl-sponsor-banners.banner-side-image')
        ->serializeToForum('mbl-sponsor-banners.image-mobile', 'mbl-sponsor-banners.banner-mobile-image')
        ->serializeToForum('mbl-sponsor-banners.is-displaying', 'mbl-sponsor-banners.is-displaying')

        ->serializeToForum('mbl-sponsor-banners.banners-link', 'mbl-sponsor-banners.banners-link')

        ->serializeToForum('mbl-sponsor-banners.side-is-displaying', 'mbl-sponsor-banners.side-is-displaying')
        ->serializeToForum('mbl-sponsor-banners.mobile-is-displaying', 'mbl-sponsor-banners.mobile-is-displaying')
        ->serializeToForum('mbl-sponsor-banners.discussion-is-displaying', 'mbl-sponsor-banners.discussion-is-displaying')

        ->serializeToForum('mbl-sponsor-banners.banner-landing-tag', 'mbl-sponsor-banners.banner-landing-tag')
        ->serializeToForum('mbl-sponsor-banners.banner-discussion-tag', 'mbl-sponsor-banners.banner-discussion-tag')
        ->serializeToForum('mbl-sponsor-banners.banner-mobile-tag', 'mbl-sponsor-banners.banner-mobile-tag')

        ->serializeToForum('mbl-sponsor-banners.start-date', 'mbl-sponsor-banners.start-date')
        ->serializeToForum('mbl-sponsor-banners.end-date', 'mbl-sponsor-banners.end-date')
];

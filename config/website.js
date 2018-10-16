const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Portfolio - Alex', // Navigation and Site Title
  siteTitleAlt: 'Alex', // Alternative Site title for SEO
  siteUrl: 'https://www.alexanderstricker.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.jpg', // Used for SEO and manifest
  siteDescription: 'Portfolio With React, Parallax And Blur Effects',

  siteFBAppID: '123456789', // Facebook App ID
  siteFacebook: 'https://www.facebook.com/alexander.stricker.12',
  siteInstagram: 'https://www.instagram.com/alexanderstricker',
  userTwitter: '@alexanderstricker', // Twitter Username
  ogSiteName: 'alexander.stricker.12', // Facebook Site Name
  ogLanguage: 'de_DE', // Facebook Language
  github: 'https://github.com/KoalaAlex/PF_Test',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};

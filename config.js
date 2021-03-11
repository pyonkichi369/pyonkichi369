module.exports = {
  pathPrefix: '',
  siteUrl: 'https://pyonkichi369.netlify.com',
  siteTitle: 'pyonkichi369',
  siteDescription: 'Logbook of a software developer',
  author: 'pyonkichi369',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://pyonkichi369.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    about: 'about',
    contact: 'contact',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/pyonkichi369',
    twitter: 'https://twitter.com/pyonkichi369',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-5KR8Y7PHN7',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  },
};

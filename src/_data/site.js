export default {
  url:
    process.env.ELEVENTY_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://www.kiwisat.org.nz',
};

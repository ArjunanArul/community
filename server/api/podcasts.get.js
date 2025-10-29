export default defineEventHandler(async (event) => {
  // Return latest 3 KPH podcast episodes from the specific playlist
  return {
    success: true,
    podcasts: [
      {
        id: 1,
        videoId: '-iL7PrF9U14',
        title: 'Latest KPH Podcast Episode',
        guest: 'KPH Community Member'
      },
      {
        id: 2,
        videoId: '0nd45ZxsQWk',
        title: 'Recent KPH Podcast Episode',
        guest: 'KPH Community Member'
      },
      {
        id: 3,
        videoId: 'nnoAQYMFaqI',
        title: 'KPH Podcast Episode',
        guest: 'KPH Community Member'
      }
    ]
  }
})

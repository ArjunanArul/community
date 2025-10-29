export const useYouTubePodcasts = () => {
  const podcasts = ref([])
  const loading = ref(false)
  const error = ref(null)

  // YouTube RSS Feed URL for the KPH podcast playlist
  const RSS_URL = 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLYhHP1R5OFVuZ3Qh-H5ZFRMCD6AzPtv3z'
  const MAX_RESULTS = 3

  const fetchPodcasts = async () => {
    loading.value = true
    error.value = null

    try {
      // Try to fetch from our server-side API endpoint first
      const response = await fetch('/api/podcasts')
      
      if (response.ok) {
        const data = await response.json()
        podcasts.value = data.podcasts || getFallbackPodcasts()
      } else {
        // Fallback to static data if server endpoint fails
        podcasts.value = getFallbackPodcasts()
      }

    } catch (err) {
      error.value = 'Using cached podcast data'
      console.log('Using fallback podcast data:', err.message)
      // Always use fallback data on any error
      podcasts.value = getFallbackPodcasts()
    } finally {
      loading.value = false
    }
  }

  // Fallback podcast data - latest 3 episodes
  const getFallbackPodcasts = () => [
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

  // Helper function to extract guest name from video title
  const extractGuestName = (title) => {
    // Common patterns in KPH podcast titles
    const patterns = [
      /with\s+([^|]+)/i,
      /featuring\s+([^|]+)/i,
      /guest:\s*([^|]+)/i,
      /interview\s+with\s+([^|]+)/i
    ]
    
    for (const pattern of patterns) {
      const match = title.match(pattern)
      if (match) {
        return match[1].trim()
      }
    }
    
    return null
  }

  return {
    podcasts: readonly(podcasts),
    loading: readonly(loading),
    error: readonly(error),
    fetchPodcasts
  }
}


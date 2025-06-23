import { Header, ReviewCard } from '@/components'
import { cache } from 'react'

type GetReviewsResponse = {
  data: {
    id: number
    documentId: string
    name: string
    city: string
    suburb: string
    drink: string
    temperature: string
    rating: number
    hexCode: string
    link: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    price: number
    image: {
      id: number
      documentID: string
      alternativeText: string | null
      name: string
      url: string
    } | null
  }[]
}

const fetchReviews = cache(async (): Promise<Review[]> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
    const queryPath =
      '/api/reviews?populate[image][fields][0]=alternativeText&populate[image]&populate[image][fields][1]=url'

    const url = new URL(queryPath, baseUrl)
    const res = await fetch(url, {
      cache: 'no-store',
    })

    if (!res.ok) throw new Error(`Failed to fetch reviews: ${res.statusText}`)

    const { data }: GetReviewsResponse = await res.json()

    const reviews = data.map(
      (review) =>
        ({
          name: review.name,
          city: review.city,
          suburb: review.suburb,
          imageSrc: `${baseUrl}${review.image?.url}`,
          drink: review.drink,
          price: review.price,
          rating: review.rating,
          hexCode: review.hexCode,
          googleUrl: review.link,
        }) as Review,
    )

    return reviews
  } catch (error) {
    console.error(error)
    return []
  }
})

const Page = async () => {
  const reviews = await fetchReviews()

  return (
    <>
      <Header />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-4 justify-center px-4">
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </>
  )
}

export default Page

import { Header, ReviewCard } from '@/components'
import Papa from 'papaparse'
import { cache } from 'react'

const SPREADSHEET_ID = '1EupYIYwq-CSQrKRi0gUkNkVOCTWa1zOSF9szu9_Gi4k'

const fetchReviews = cache(async (): Promise<Review[]> => {
  try {
    const res = await fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch reviews: ${res.statusText}`)
    }

    const csvText = await res.text()
    const parsedCsv = Papa.parse(csvText, { header: true }).data as Record<string, string>[]

    const reviews = parsedCsv.map((r) => ({
      name: r.Name,
      city: r.City,
      suburb: r.Suburb,
      imageSrc: `https://drive.google.com/uc?id=${r['Image URL'].split('/')[5]}`,
      drink: r.Drink,
      price: Math.round(Number(r.Price) * 10) / 10,
      rating: Math.round(Number(r.Rating) * 10) / 10,
      hexCode: r['Hex Code'],
      googleUrl: r['Google URL'],
    }))

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

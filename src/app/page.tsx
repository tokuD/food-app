import { Description, FoodList } from '@/components'
import { HomeTemplate } from '@/templates'

export default function Home() {
  return (
    <HomeTemplate>
      <main className="bg-stone-800 w-screen h-screen flex flex-col items-center py-[100px]">
        <Description />
        <FoodList />
      </main>
    </HomeTemplate>
  )
}

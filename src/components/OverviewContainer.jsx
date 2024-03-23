import data from '../../data/data.json'
import { OverviewCard } from './OverviewCard'

console.log(data.overview)

export const OverviewContainer = () => {

  const convertNumberToK = (number) => {
    if (number >= 10000) {
      number = number / 1000
      return `${number}k`
    }else {
      return number
    }
  }

  return (
    <section className='absolute top-[191px] left-0 right-0'>
        {
            data.overview.map(object =>
                
                <OverviewCard 
                    key={object.id}
                    user={object.user}
                    audienceType={object.audienceType}
                    audience={convertNumberToK(object.audience)}
                    network={object.network}
                    isUp={object.isUp}
                    today={object.today}
                />
            )
        }
    </section>
  )
}

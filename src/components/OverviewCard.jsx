import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo
}

const networkColors = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  Instagram: 'bg-Instagram',
  YouTube: 'bg-YouTube'
}

export const OverviewCard = ({user, audienceType, audience, network}) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[256px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden">
        <div className={`${networkColors[network]} h-1`}></div>
        <div className='flex justify-center items-center gap-2'>
          <img src={networkLogos[network]} alt={`logo ${network}`} />
          <p>{user}</p>
        </div>
        <p>{audience}</p>
        <p>{audienceType}</p>
    </article>
  )
}

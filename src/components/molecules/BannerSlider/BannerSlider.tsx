import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

const settings: Settings = {
  dots: false,
  arrows: true,
  vertical: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
}

const BannerSlider = () => {
  return (
    <Slider {...settings}>
      <div>
        <Image width={1920} height={620} alt="banner" src="/banner.png" />
      </div>
      <div>
        <Image width={1920} height={620} alt="banner2" src="/banner2.png" />
      </div>
    </Slider>
  )
}

export default BannerSlider

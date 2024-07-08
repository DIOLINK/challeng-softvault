import IconRight from '@/assets/IconRight.svg'
import VectorCenter from '@/assets/VectorCenter.svg'
import VectorCenterBackground from '@/assets/VectorCenterBackground.svg'
import VectorLeft from '@/assets/VectorLeft.svg'
import VectorLeftBackground from '@/assets/VectorLeftBackground.svg'
import VectorRight from '@/assets/VectorRight.svg'
import VectorRightBackground from '@/assets/VectorRightBackground.svg'
const HEIGHT_INSIDE_BOX = 152
export const DATA = [
  {
    id: 'box-left',
    box_image: {
      size: { height: 223, width: 376 },
      images: [VectorLeftBackground, VectorLeft],
      alt: 'box-image-left',
    },
    inside_box: {
      size: { height: HEIGHT_INSIDE_BOX, width: '100%' },
      title: {
        id: 'title-left',
        label: 'Understanding needs',
        size: {
          width: '50%',
        },
      },
      content: {
        id: 'content-left',
        label:
          'We identify who has the problem or need and provide a detailed description of what the problem entails.',
        size: {
          width: '70%',
        },
      },
    },
  },
  {
    id: 'box-center',
    box_image: {
      size: { height: 223, width: 389 },
      images: [VectorCenterBackground, VectorCenter],
      alt: 'box-image-center',
      translate: '-14px',
    },
    inside_box: {
      size: { height: HEIGHT_INSIDE_BOX, width: '75%' },
      translate: '19px',
      title: {
        id: 'title-center',
        label: 'Identifying opportunities',
        size: {
          width: '50%',
        },
      },
      content: {
        id: 'content-center',
        label:
          "Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard...",
        size: {
          width: '93%',
        },
        opacity: 0.5,
      },
    },
  },
  {
    id: 'box-right',
    box_image: {
      size: { height: 222, width: 384 },
      images: [VectorRightBackground, VectorRight],
      icon: IconRight,
      alt: 'box-image-right',
    },
    inside_box: {
      size: { height: HEIGHT_INSIDE_BOX, width: '75%' },
      title: {
        id: 'title-right',
        label: 'Developing customized solutions',
        size: {
          width: '100%',
        },
      },
      content: {
        id: 'content-right',
        label:
          "Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard...",
        size: {
          width: '93%',
        },
        opacity: 0.5,
      },
    },
  },
]

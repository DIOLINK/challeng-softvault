import IconRight from '@/assets/IconRight.svg'
import VectorCenter from '@/assets/VectorCenter.svg'
import VectorCenterBackground from '@/assets/VectorCenterBackground.svg'
import VectorLeft from '@/assets/VectorLeft.svg'
import VectorLeftBackground from '@/assets/VectorLeftBackground.svg'
import VectorRight from '@/assets/VectorRight.svg'
import VectorRightBackground from '@/assets/VectorRightBackground.svg'
import box from '@/assets/box.svg'
import { BoxImage, Layout, Section, Typography } from '@/components'
import { InsideBoxImg } from '@/components/BoxImage/BoxImage.styled'
import { Main } from '@/components/Layout/styles'
import { COLORS } from '@/styles/Colors'
import Head from 'next/head'

export default function Home() {
  const HEIGHT_INSIDE_BOX = 152

  return (
    <Layout>
      <Head>
        <title>Challenge softvault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Section>
          <BoxImage
            width={376}
            height={223}
            src={[VectorLeftBackground, VectorLeft]}
            altImg="box"
          >
            <InsideBoxImg width="100%" height={HEIGHT_INSIDE_BOX}>
              <Typography
                label="Understanding needs"
                isTitle
                customWidth="50%"
              />
              <Typography
                id="left"
                label="We identify who has the problem or need and provide a detailed description of what the problem entails."
                customWidth="80%"
              />
            </InsideBoxImg>
          </BoxImage>

          <BoxImage
            width={389}
            height={223}
            src={[VectorCenterBackground, VectorCenter]}
            altImg="box"
            customTranslate="-14px"
          >
            <InsideBoxImg
              width="75%"
              height={HEIGHT_INSIDE_BOX}
              customTranslate="18px"
            >
              <Typography
                label="Identifying opportunities"
                isTitle
                customWidth="50%"
              />
              <Typography
                id="center"
                label="Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard..."
                customWidth="93%"
                customOpacity={0.5}
              />
            </InsideBoxImg>
          </BoxImage>

          <BoxImage
            width={384}
            height={222}
            icon={IconRight}
            src={[VectorRightBackground, VectorRight]}
            altImg="box"
          >
            <InsideBoxImg width="75%" height={HEIGHT_INSIDE_BOX}>
              <Typography label="Developing customized solutions" isTitle />
              <Typography
                id="right"
                label="Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard"
                customWidth="93%"
                customOpacity={0.5}
              />
            </InsideBoxImg>
          </BoxImage>
        </Section>
        <Section>
          <BoxImage
            width={513}
            height={127}
            src={[box]}
            altImg="box"
            customPadding="34px 41px 55px"
          >
            <Typography
              label="Below are some of the key technologies we use in our projects:"
              isTitle
              customColor={COLORS.medium_aquamarine}
            />
          </BoxImage>
        </Section>
      </Main>
    </Layout>
  )
}

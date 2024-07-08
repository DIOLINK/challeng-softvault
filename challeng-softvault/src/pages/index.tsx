import box from '@/assets/box.svg'
import { BoxImage, Layout, Section, Typography } from '@/components'
import { InsideBoxImg } from '@/components/BoxImage/BoxImage.styled'
import { Main } from '@/components/Layout/styles'
import { DATA } from '@/data'
import { COLORS } from '@/styles/Colors'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Challenge Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Section>
          {DATA.map(({ id, box_image, inside_box }) => (
            <BoxImage
              key={id}
              width={box_image.size.width}
              height={box_image.size.height}
              src={box_image.images}
              altImg={box_image.alt}
              customTranslate={box_image.translate}
              icon={box_image.icon}
            >
              <InsideBoxImg
                width={inside_box.size.width}
                height={inside_box.size.height}
                customTranslate={inside_box.translate}
              >
                <Typography
                  id={inside_box.title.id}
                  label={inside_box.title.label}
                  customWidth={inside_box.title?.size.width}
                  isTitle
                />
                <Typography
                  id={inside_box.content.id}
                  label={inside_box.content.label}
                  customWidth={inside_box.content.size.width}
                  customOpacity={inside_box.content.opacity}
                />
              </InsideBoxImg>
            </BoxImage>
          ))}
        </Section>
        <Section>
          <BoxImage
            width={513}
            height={127}
            src={[box]}
            altImg="box-footer"
            customPadding="34px 41px 55px"
          >
            <Typography
              id="footer"
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

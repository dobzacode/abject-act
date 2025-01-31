import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NavLink from 'components/ui/header/nav-link';
import H2 from 'components/ui/text/h2';
import { getTranslations } from 'next-intl/server';
import Image, { StaticImageData } from 'next/image';
import { v4 } from 'uuid';

export default async function ArtistSnippet({
  artistSrc,
  artist,
  socials
}: {
  artistSrc: StaticImageData;
  artist: string;
  socials: { link: string; mdiPath: string }[];
}) {
  const t = await getTranslations('more');

  console.log(artist);

  return (
    <div
      className={
        'slideInFromLeft transparent-card group z-10 flex h-fit w-fit cursor-pointer  flex-col items-center  justify-center gap-medium overflow-hidden rounded-small  bg-black95 duration-medium  laptop:w-fit'
      }
    >
      <div className="relative aspect-[4/5] h-[28.125rem]  ">
        <Image
          placeholder="blur"
          className="object-cover duration-medium group-hover:blur-[2px] group-hover:saturate-50"
          fill
          src={artistSrc}
          alt={`morsure picture`}
        ></Image>

        <div className="gap flex h-full w-full flex-col items-center justify-center gap-small opacity-0 duration-medium after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:opacity-0 after:duration-medium group-hover:opacity-100 group-hover:after:opacity-40">
          <H2
            className=" z-10 text-center font-extralight text-white  duration-medium"
            textType={'heading--large'}
          >
            {artist}
          </H2>

          <div className="relative z-[100] flex gap-extra-small [&>*:hover]:scale-110 [&>*]:duration-medium">
            {socials?.map(({ link, mdiPath }) => {
              switch (mdiPath) {
                case 'mdiEmail':
                  return (
                    <a key={v4()} href={link} className="relative z-40">
                      <Icon path={mdiPath} size={1.5} color="white"></Icon>
                    </a>
                  );
                case 'bandcamp':
                  return (
                    <a key={v4()} href={link} className="relative z-40 flex items-center">
                      <Image
                        alt="bandcamp icon"
                        width={16}
                        height={16}
                        src={'/asset/additional-icon/bandcamp-button-circle-whiteblack-32.png'}
                      ></Image>
                    </a>
                  );
                default:
                  return (
                    <a key={v4()} href={link} className="relative z-40">
                      <Icon path={mdiPath} size={0.8125} color="white"></Icon>
                    </a>
                  );
              }
            })}
          </div>
          <NavLink
            isPrimaryNav={false}
            href={`/artists/${artist.toLowerCase().replace(' ', '')}`}
            liClass={' '}
            className="absolute right-small top-small z-40 flex items-center gap-1 text-white duration-medium hover:scale-105"
          >
            <p className="body">{t('text')}</p>
            <Icon className="pt-1" path={mdiArrowRight} size={0.8125} color="white"></Icon>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

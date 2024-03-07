import { generateOpenGraphImage } from 'app/_action';
import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { getLocale, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const locale = await getLocale();
  return {
    title: 'Abject Act',
    description: 'lorem ipsum',
    openGraph: {
      images: await generateOpenGraphImage(
        locale !== '/en' ? '/a-propos/abject-act' : `${locale}/about/abject-act`
      )
    }
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-large overflow-hidden py-extra-large tablet:pb-extra-large ">
      <H1
        textType={'heading--extra-large'}
        className="slideInFromRight relative z-10 text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
      >
        ABJECT ACT
      </H1>
      <div className="slideInFromLeft flex flex-col gap-small px-small tablet:px-0">
        <P textType={'sub-heading'} className="slideInLeft max-w-[600px] text-center text-black5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </P>
        <P textType={'sub-heading'} className="slideInLeft max-w-[600px] text-center text-black5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </P>
      </div>
    </main>
  );
}

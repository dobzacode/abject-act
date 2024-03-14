import ContactSection from 'components/contact/contact-section';
import RecaptchaProvider from 'components/providers/recaptcha-provider';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata() {
  const t = await getTranslations('metadata.contact');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <main className=" relative flex h-screen flex-col items-center gap-sub-large overflow-hidden px-small py-extra-large tablet:pb-extra-large tablet:pt-[22rem]">
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          sizes={'100vw'}
          fill
          alt={''}
          className="object-cover"
          priority={true}
          quality={100}
          src={'/asset/background/contact-bg.webp'}
        ></Image>
      </div>

      <RecaptchaProvider>
        <ContactSection></ContactSection>
      </RecaptchaProvider>
    </main>
  );
}

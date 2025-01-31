'use client';

import Input from 'components/ui/form/input';
import { cn } from 'lib/utils';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ContactForm from './contact/contact-form';
import JoinUsForm from './join-us/join-us-form';
import PartnershipForm from './partnership/partnership-form';

export default function ContactSection({ isJoinUs = false }: { isJoinUs?: boolean }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const t = useTranslations('navigation.primaryNavigation');

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {}, [selectedOption, pathname, router, isJoinUs]);

  return (
    <>
      <section
        className={cn(
          ' slideInFromBottom transparent-card mx-small flex w-full flex-col gap-extra-small rounded-small p-small  text-black5  mobile-large:mx-0 mobile-large:w-2/3 tablet:w-fit'
        )}
      >
        {!isJoinUs ? (
          <>
            <Input
              onChange={handleSelectChange}
              id={'formType'}
              value={selectedOption}
              intent="black"
              choices={['Contact', t('partnership')]}
              type="select"
              hiddenlabel="true"
            ></Input>
            {searchParams.get('type') === t('partnership').toLowerCase().replace(/ /g, '-') ? (
              <PartnershipForm executeRecaptcha={executeRecaptcha as any}></PartnershipForm>
            ) : null}
            {searchParams.get('type') === 'contact' || !searchParams.get('type') ? (
              <ContactForm executeRecaptcha={executeRecaptcha as any}></ContactForm>
            ) : null}
          </>
        ) : (
          <JoinUsForm executeRecaptcha={executeRecaptcha as any}></JoinUsForm>
        )}
      </section>
    </>
  );
}

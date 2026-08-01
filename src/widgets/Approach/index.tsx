'use client';

import { FC } from 'react';

import HoverCards from '@/components/ui/HoverCards';
import SectionOpacity from '@/components/ui/SectionOpacity';
import SectionTitle from '@/components/ui/SectionTitle';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Approach: FC<Props> = () => {
  return (
    <section
      id="approach"
      className="
        border-t
        border-white/10
        bg-black text-white
        py-16 md:py-24 lg:py-28
      "
    >
      <SectionOpacity>
        {/* SECTION TITLE */}
        <SectionTitle
          title="APPROACH."
          className="
            px-[6vw] md:px-[3vw]
            pt-0
            top-0
            z-20
            
          "
        />

        {/* CARDS */}
        <div className="px-5 pt-8 sm:px-8 md:px-[3vw] md:pt-10">
          <HoverCards cards={APPROACH_CARDS} />
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Approach;

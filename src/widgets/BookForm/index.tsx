"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";

import {
  BOOK_FORM_DEFAULT_STATE,
  INPUT_FIELDS,
  RADIO_FIELDS,
} from "@/data";

// Components
import Button from "@/components/ui/Button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/RadioGroup";

interface Props {}

const Index: FC<Props> = () => {
  const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);

  const { push } = useRouter();

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
  };

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        text-white
        px-5
        py-16
        sm:px-8
        md:py-24
        lg:px-[6vw]
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND

          IMPORTANT:
          No bg-black / bg-[#020303] here.

          This keeps the global cursor / ShadowCursor
          effect visible on the complete page.
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top left orange glow */}

        <div
          className="
            absolute
            -left-40
            top-[-100px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-orange-500/[0.06]
            blur-[150px]
          "
        />

        {/* Top right glow */}

        <div
          className="
            absolute
            -right-40
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-amber-400/[0.045]
            blur-[160px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-[45%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.025]
            blur-[170px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[450px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-orange-400/[0.03]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          FORM CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[70vw] md:max-w-[85vw]">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="relative mb-[2.5vw]">

          {/* Back button */}

          <button
            type="button"
            aria-label="Go back to home"
            onClick={() => push("/")}
            className="
              group
              absolute
              left-0
              top-[25%]
              z-10
              box-content
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              p-[0.5vw]
              backdrop-blur-xl
              transition
              duration-300
              hover:border-orange-400/30
              hover:bg-orange-500/10
            "
          >
            <svg
              focusable="false"
              aria-hidden="true"
              className="
                h-[1.5vw]
                w-[1.5vw]
                fill-white/50
                transition
                duration-300
                group-hover:fill-orange-400
                md:h-[2.25vw]
                md:w-[2.25vw]
              "
              viewBox="0 0 24 24"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
            </svg>
          </button>

          {/* Title */}

          <h1
            className="
              text-center
              text-[3.5vw]
              font-bold
              leading-[100%]
              tracking-tight
              text-white
              md:mb-[2.25vw]
              md:text-[4.6vw]
            "
          >
            Request form
          </h1>
        </div>

        {/* ===================================================
            FORM
        =================================================== */}

        <form
          className="flex h-full flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full">

            {/* =================================================
                RADIO FIELDS
            ================================================= */}

            <div className="flex flex-wrap gap-x-[1.75vw]">
              {RADIO_FIELDS.map((item) => (
                <RadioGroup
                  key={item.title}
                  required
                  onValueChange={(value) =>
                    setForm((prev) => ({
                      ...prev,
                      [item.formKey]: value,
                    }))
                  }
                  className={`
                    mb-[1.75vw]
                    inline-block
                    w-[calc(50%-0.875vw)]
                    ${item.classes}
                  `}
                >
                  <h4
                    className="
                      mb-[0.2vw]
                      text-[1.3vw]
                      font-medium
                      text-white
                      md:mb-[0.5vw]
                      md:text-[1.6vw]
                    "
                  >
                    {item.title}
                  </h4>

                  {item.radioArray.map((radio) => (
                    <div
                      key={radio.value}
                      className="
                        flex
                        items-center
                        space-x-[0.65vw]
                        font-[400]
                        md:space-x-[1vw]
                        md:space-y-[0.3vw]
                      "
                    >
                      <RadioGroupItem
                        value={radio.value}
                        id={`${item.formKey}-${radio.value}`}
                        required
                      />

                      <label
                        htmlFor={`${item.formKey}-${radio.value}`}
                        className="
                          cursor-pointer
                          text-[1vw]
                          leading-[1.75vw]
                          text-white/70
                          transition
                          hover:text-white
                          md:text-[1.25vw]
                        "
                      >
                        {radio.name}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              ))}
            </div>

            {/* =================================================
                INPUT FIELDS
            ================================================= */}

            <div
              className="
                w-full
                space-y-[2vw]
                text-[1.1vw]
              "
            >
              {INPUT_FIELDS.map((item) => (
                <div
                  key={item.label}
                  className={`w-full ${item.classes}`}
                >
                  <label
                    htmlFor={item.name}
                    className="
                      mb-[0.4vw]
                      inline-block
                      leading-[1.5]
                      text-[1.2vw]
                      text-white/80
                      md:text-[1.5vw]
                    "
                  >
                    {item.label}
                  </label>

                  <input
                    type={item.type || "text"}
                    name={item.name}
                    id={item.name}
                    required={item.required}
                    onChange={handleInputChange}
                    className="
                      h-[3vw]
                      w-full
                      appearance-none
                      rounded-[0.25vw]
                      border-[0.125vw]
                      border-orange-400/40
                      bg-white/[0.025]
                      px-[1vw]
                      py-[0.8vw]
                      text-white
                      outline-none
                      backdrop-blur-xl
                      transition
                      duration-300
                      placeholder:text-white/30
                      focus:border-orange-400
                      focus:bg-white/[0.05]
                      focus:ring-1
                      focus:ring-orange-400/20
                      md:h-[4vw]
                    "
                  />
                </div>
              ))}

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="
                    mb-[0.4vw]
                    inline-block
                    leading-[1.5]
                    text-[1.2vw]
                    text-white/80
                    md:text-[1.5vw]
                  "
                >
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  minLength={20}
                  maxLength={500}
                  onChange={handleInputChange}
                  className="
                    min-h-[10vw]
                    w-full
                    resize-none
                    rounded-[0.125vw]
                    border-[0.125vw]
                    border-orange-400/40
                    bg-white/[0.025]
                    px-[0.8vw]
                    py-[0.6vw]
                    text-[1.2vw]
                    text-white
                    outline-none
                    backdrop-blur-xl
                    transition
                    duration-300
                    placeholder:text-white/30
                    focus:border-orange-400
                    focus:bg-white/[0.05]
                    focus:ring-1
                    focus:ring-orange-400/20
                    md:text-[1.5vw]
                  "
                />
              </div>
            </div>

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <Button
              title="Submit"
              type="submit"
              classes="
                bg-orange-500/90
                px-[5vw]
                py-[1.2vw]
                text-[1.1vw]
                transition
                duration-300
                hover:bg-orange-400
                md:px-[8vw]
                md:py-[1.6vw]
                md:text-[1.5vw]
              "
              btnClasses="
                mt-[2.5vw]
                self-start
                p-[0.2vw]
                md:p-[0.25vw]
              "
            />
          </div>
        </form>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-0
          h-40
          w-full
          bg-gradient-to-t
          from-black/10
          to-transparent
        "
      />
    </main>
  );
};

export default Index;






// 'use client';
// import { useRouter } from 'next/navigation';
// import { FC, useState } from 'react';

// import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';

// //components
// import Button from '@/components/ui/Button';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

// interface Props {}

// const Index: FC<Props> = () => {
//   const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);
//   const { push } = useRouter();

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     console.log(form)
//   }

//   return (
//     <div className="mx-auto max-w-[70vw] md:max-w-[85vw] px-[4vw] ">
//       <div className="relative">
//         <button
//           className=" group absolute left-0 top-[25%] z-10 box-content rounded-full bg-stone-800 p-[0.5vw] hover:bg-stone-800"
//           onClick={() => push('/')}
//         >
//           <svg
//             focusable="false"
//             className="h-[1.5vw] w-[1.5vw] md:h-[2.25vw] md:w-[2.25vw] fill-stone-400 transition group-hover:fill-stone-300"
//             viewBox="0 0 24 24"
//           >
//             <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
//           </svg>
//         </button>
//         <h1 className="mb-[1.75vw] md:text-[4.6vw] md:mb-[2.25vw] text-center text-[3.5vw] font-bold leading-[100%]">Request form</h1>
//       </div>
//       <form className="flex h-full flex-col items-center" onSubmit={handleSubmit}>
//         <div className="flex flex-wrap">
//           {RADIO_FIELDS.map((item) => (
//             <RadioGroup
//               onValueChange={(value) => setForm((prev) => ({ ...prev, [item.formKey]: value }))}
//               key={item.title}
//               className={`mb-[1.75vw] inline-block w-[calc(50%-1.75vw)] ${item.classes}`}
//               required={true}
//             >
//               <h4 className="mb-[0.2vw] md:mb-[0.5vw] text-[1.3vw] md:text-[1.6vw] font-medium">{item.title}</h4>
//               {item.radioArray.map((radio) => (
//                 <div key={radio.value} className="flex items-center space-x-[0.65vw] md:space-x-[1vw] md:space-y-[0.3vw] font-[400]">
//                   <RadioGroupItem value={radio.value} id={radio.name} required={true} />
//                   <label htmlFor={radio.name} className="text-[1vw] md:text-[1.25vw] leading-[1.75vw]">
//                     {radio.name}
//                   </label>
//                 </div>
//               ))}
//             </RadioGroup>
//           ))}

//           <div className="w-full space-y-[2vw] text-[1.1vw]">
//             {INPUT_FIELDS.map((item) => (
//               <div key={item.label} className={`w-full ${item.classes}`}>
//                 <label htmlFor={item.label} className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block">
//                   {item.label}
//                 </label>
//                 <input
//                   onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
//                   type={item.type || 'text'}
//                   name={item.name}
//                   id={item.label}
//                   className="h-[3vw] md:h-[4vw] w-full appearance-none rounded-[0.25vw] border-[0.125vw] border-primary/80 bg-transparent px-[1vw] py-[0.8vw]"
//                   required={item.required}
//                 />
//               </div>
//             ))}
//             <div className="w-full">
//               <label className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block" htmlFor="message">
//                 Tell us about your project
//               </label>
//               <textarea
//                 minLength={20}
//                 maxLength={500}
//                 onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
//                 id="message"
//                 name="message"
//                 className="min-h-[10vw] w-full resize-none border-[0.125vw] rounded-[0.125vw] text-[1.2vw] md:text-[1.5vw] border-primary/80 bg-transparent px-[0.8vw] py-[0.6vw]"
//               />
//             </div>
//           </div>

//           <Button
//             title="Submit"
//             type="submit"
//             classes="py-[1.2vw] px-[5vw] md:py-[1.6vw] md:px-[8vw] text-[1.1vw] md:text-[1.5vw] bg-bg-1/90 hover:bg-bg-1/80"
//             btnClasses="p-[0.2vw] md:p-[0.25vw] capitalize self-start mt-[2.5vw]"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Index;

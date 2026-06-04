// import { Notices } from "@/types/payload-types";
// import { formatIsoDate } from "@/utils/formatDate";
// import Image from "next/image";
// import Link from "next/link";

// interface Props {
//   notices: Notices;
// }

// const Hero: React.FC<Props> = ({ notices }) => {
//   if (!notices?.docs) return null;

//   return (
//     <section className="mx-auto flex w-full max-w-345 flex-col gap-21 px-8.75 py-21 md:gap-25 md:py-25">
//       <h1 className="relative text-center text-[1.75rem] font-bold after:absolute after:-bottom-3.5 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[#213691]">
//         Notice
//       </h1>
//       <div className="grid w-full gap-12 md:grid-cols-3 md:gap-x-12 md:gap-y-25">
//         {notices.docs.map((notice, index) => {
//           const { id, title, featuredImage, date, author } = notice;

//           if (!featuredImage || typeof featuredImage === "string") return null;
//           if (!featuredImage.url) return null;
//           if (typeof title !== "string") return null;

//           return (
//             <Link
//               href={`/notice/${id}`}
//               key={index}
//               className="flex flex-col gap-7.5 md:gap-10"
//             >
//               <Image
//                 src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL}${featuredImage.url}`}
//                 className="aspect-square w-full object-cover"
//                 alt={featuredImage.alt || title}
//                 width={1920}
//                 height={1080}
//               />
//               <div className="flex flex-col gap-2">
//                 <div className="text-sm text-gray-500">
//                   {typeof date === "string" && formatIsoDate(date)}
//                   {typeof author === "string" && author && (
//                     <span className="ml-3">{author}</span>
//                   )}
//                 </div>
//                 <h2 className="text-[1.5rem] leading-[130%] font-bold">
//                   {title}
//                 </h2>
//               </div>
//               <button className="rounded-xl bg-[#213691] py-5 text-white">
//                 자세히보기 +
//               </button>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Hero;

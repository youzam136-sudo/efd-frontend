import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Contact = () => {

  const router = useRouter();

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex h-115 w-full flex-col items-center justify-center gap-4 text-white md:h-127.5"
    >
      <motion.span
        variants={itemVariants}
        className="text-center text-lg font-bold"
      >
        Work with us
      </motion.span>
      <motion.h1
        variants={itemVariants}
        className="text-center text-3xl font-bold md:text-[2.875rem] md:leading-[100%]"
      >
        이에프티에 문의하세요.
      </motion.h1>
      
        <motion.button
          variants={itemVariants}
          className="mt-4 cursor-pointer border border-white px-18 py-3.5 font-bold backdrop-blur
        hover:bg-white hover:text-black transition-colors duration-500
        "
        onClick={()=> {
          router.push('/contact');
        }}
        >
          
          문의하기
        </motion.button>

      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/home/contact.png"
        width={1920}
        height={1080}
        alt="section-img"
      />
    </motion.section>
  );
};

export default Contact;

import Img1 from '../../assets/5.jpg';
import Img2 from '../../assets/6.jpg';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation';

interface IJournalData {
  id: number;
  title: string;
  about: string;
  date: string;
  url: string;
  image: string;
  delay: number;
}

const JournalData: IJournalData[] = [
  {
    id: 1,
    title: 'An Unforgattable',
    about:
      'If you only have one day to visit yosemite National Park and you want to make the out of it.',
    date: 'May 30, 2022',
    url: '#',
    image: Img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: 'Symphonies in Steel',
    about:
      'Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.',
    date: 'April 30, 2021',
    url: '#',
    image: Img2,
    delay: 0.4,
  },
];

const Journal: React.FC = () => {
  return (
    <>
      <section className="container mt-40" id="journal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4"
        >
          <p className="text-3xl">The Journal</p>
          <p>
            Our favorite stories about public lands and opportunities for you to
            go involved in protecting your outdoor experienced.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20">
          {JournalData.map((data) => (
            <motion.div
              variants={SlideUp(data.delay)}
              initial="hidden"
              whileInView="visible"
              key={data.id}
            >
              <div className="overflow-hidden">
                <img
                  src={data.image}
                  alt="journal"
                  className="w-full h-[350px] object-cover"
                />
                <div className="space-y-4 py-6 text-center px-12">
                  <p className="uppercase">{data.date}</p>
                  <p className="text-xl font-semibold font-merriweather">
                    {data.title}
                  </p>
                  <p className="!mt-8">{data.about}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">
          All posts
        </button>
      </section>
    </>
  );
};

export default Journal;

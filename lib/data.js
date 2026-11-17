import { GiSelfLove } from "react-icons/gi";
import { IoMdInfinite } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
// Set `img` to a path in /public (e.g. "/images/home-garden.jpg") to replace any placeholder.
export const site = {
  phone1: "+1 56 786 453",
  phone2: "",
  email: "hello@Guerrero Gardening Co.com",
  address: ["P.O. Box 589-456", "Miami", "USA"],
};
export const services = [
  {
    slug: "garden-design",
    title: "Garden Design",
    desc: "We design a garden that suits your lifestyle and makes the most of your property.",
    img: "/images/service4.png",
    img2: "/images/service9.png",
  },
  {
    slug: "plant-selection",
    title: "Plant Selection",
    desc: "Hand-picked plants chosen to thrive in your garden's soil, light and climate.",
    img: "/images/service3.png",
    img2: "/images/service10.png",
  },

  {
    slug: "hardscaping",
    title: "Hardscaping",
    desc: "Patios, walkways and retaining walls that give your landscape structure.",
    img: "/images/service2.png",
    img2: "/images/service11.png",
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    desc: "Regular trimming, feeding and cleanup so your garden looks its best all year.",
    img: "/images/service1.png",
    img2: "/images/service12.png",
  },
  {
    slug: "aquascape-installation",
    title: "Aquascape Installation",
    desc: "Fountains, ponds and waterfalls that bring the calm sound of water outside.",
    img: "/images/service5.png",
    img2: "/images/abt4.png",
  },
  {
    slug: "garden-irrigation",
    title: "Garden Irrigation",
    desc: "Watering systems that give every bed the right amount of water, all year.",
    img: "/images/service6.png",
    img2: "/images/abt3.png",
  },
  {
    slug: "garden-consultation",
    title: "Garden Consultation",
    desc: "Book a visit for honest advice and a clear plan for your garden project.",
    img: "/images/service7.png",
    img2: "/images/home1.png",
  },
  {
    slug: "outdoor-lighting-design",
    title: "Outdoor Lighting Design",
    desc: "Lighting that makes paths safe and your garden beautiful after dark.",
    img: "/images/service8.png",
    img2: "/images/pro2.png",
  },
];
export const projects = [
  {
    title: "Evening Garden",
    year: "2023",
    location: "Sunnyvale, CA",
    service: "Garden Landscaping",
    cat: "Landscape",
    img: "/images/work1.png",
  },
  {
    title: "Minimalist Garden",
    year: "2023",
    location: "Ashville, NC",
    service: "Event Garden Design",
    cat: "Garden",
    img: "/images/work2.png",
  },
  {
    title: "Green Display Garden",
    year: "2023",
    location: "Brooklyn, NY",
    service: "Indoor Garden",
    cat: "Plants",
    img: "/images/pro2.png",
  },
];
export const team = [
  {
    name: "Sarah Turner",
    role: "Founder and Lead Designer",
    img: "/images/sarah.png",
  },
  { name: "John Mason", role: "Landscape Architect", img: "/images/john.png" },
  {
    name: "Emily Parker",
    role: "Horticulture Expert",
    img: "/images/emily.png",
  },
  {
    name: "David Anderson",
    role: "Team Project Manager",
    img: "/images/david.png",
  },
];
export const values = [
  {
    icon: <GiSelfLove className="text-3xl" />,
    title: "Passion in every job",
    text: "We care about creating beautiful, sustainable landscapes for every client.",
  },
  {
    icon: <IoMdInfinite className="text-4xl" />,
    title: "Collaboration on top",
    text: "We work with you to turn your ideas into a design that fits your space.",
  },
  {
    icon: <FaRegCheckCircle className="text-3xl" />,
    title: "Sustainability in check",
    text: "We nurture nature one garden at a time, so your landscape lasts.",
  },
  {
    icon: <IoIosStarOutline className="text-3xl" />,
    title: "Creativity unleashed",
    text: "Our designs stand out, and they always suit the way you live.",
  },
];
export const steps = [
  {
    t: "Design consultation",
    d: "We sit down with you to talk through your garden vision and preferences.",
  },
  {
    t: "Design and planning",
    d: "Our team crafts a custom garden plan that fits your wishes and your space.",
  },
  {
    t: "Review and approval",
    d: "We present the design for your review and adjust it until you are happy.",
  },
  {
    t: "Construction",
    d: "Once approved, we build the garden and walk you through the finished result.",
  },
];
export const testimonials = [
  {
    quote:
      "Guerrero Gardening Co. turned our backyard into a haven of tranquility. Their attention to detail and sustainable practices impressed us.",
    name: "Steve Evans",
    role: "CEO, Malley Company",
    img: "/images/man.png",
  },
  {
    quote:
      "From the first consultation to the final planting, the team was clear, careful and on time.",
    name: "Maria Hugh",
    role: "Marketing, Elston Company",
    img: "/images/woman.png",
  },
];
export const faqs = [
  {
    q: "How does the garden design process work?",
    a: "We start with a consultation, then create a plan, review it with you, and build it once you approve.",
  },
  {
    q: "How long does a typical project take?",
    a: "Small gardens take a few weeks. Larger landscapes can take a few months. We give you a timeline up front.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. We offer monthly and seasonal care plans for every garden we build.",
  },
  {
    q: "Can I get a quote before I commit?",
    a: "Yes. Send us a message with your project details and we will reply with a quote.",
  },
];

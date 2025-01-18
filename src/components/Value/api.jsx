import { FaDollarSign, FaChartLine, FaHome, FaSchool, FaMoneyBillWave } from 'react-icons/fa';

export const questions = [
  {
    id: 1,
    question: "What is the starting price of properties in this area?",
    answer: "The starting price is $250,000 for a 2 BHK apartment.",
    icon: <FaDollarSign />
  },
  {
    id: 2,
    question: "Are there any financing options available?",
    answer: "Yes, we offer multiple financing options, including home loans with low-interest rates.",
    icon: <FaMoneyBillWave />
  },
  {
    id: 3,
    question: "What amenities are included in the project?",
    answer: "The project offers a gym, swimming pool, clubhouse, and children's play area.",
    icon: <FaHome />
  },
  {
    id: 4,
    question: "Is the property located near schools and hospitals?",
    answer: "Yes, the property is within a 5 km radius of top schools and hospitals.",
    icon: <FaSchool />
  },
  {
    id: 5,
    question: "What is the expected appreciation rate in the next 5 years?",
    answer: "The property value is expected to appreciate by 8-10% annually.",
    icon: <FaChartLine />
  }
];

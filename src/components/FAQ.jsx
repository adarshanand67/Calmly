import React from "react";
import FAQCard from "./FAQCard";

const FAQData = [
  {
    id: 1,
    title: "What is mental health?",
    description:
      "Mental health refers to a person's overall psychological well-being. It encompasses an individual's emotions, thoughts, and behaviors, as well as their ability to handle stress and interact with others.",
  },
  {
    id: 2,
    title: "What are common signs of poor mental health?",
    description:
      "Common signs of poor mental health include prolonged feelings of sadness or anxiety, difficulty sleeping, changes in appetite, irritability or frustration, lack of energy, and difficulty concentrating.",
  },
  {
    id: 3,
    title: "What can I do to improve my mental health?",
    description:
      "There are many things you can do to improve your mental health, including engaging in regular exercise, eating a healthy diet, getting enough sleep, connecting with others and building a support network, practicing mindfulness and relaxation techniques, and seeking professional help if needed.",
  },
  {
    id: 4,
    title: "When should I seek professional help for my mental health?",
    description:
      "You should seek professional help for your mental health if you are experiencing symptoms that are significantly impacting your daily life, such as prolonged feelings of sadness or anxiety, thoughts of self-harm or suicide, or if you are struggling to manage stress or cope with difficult life events.",
  },
  {
    id: 5,
    title: "Is therapy effective for treating mental health conditions?",
    description:
      "Yes, therapy can be effective for treating mental health conditions. Research has shown that therapy, along with medication and other treatments, can help individuals manage symptoms, improve their quality of life, and achieve their goals.",
  },
];

const FAQ = () => {
  return (
    <section className="mx-auto w-3/4 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-black dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 md:gap-16">
          {FAQData.map((item) => (
            <FAQCard
              title={item.title}
              description={item.description}
              id = {item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

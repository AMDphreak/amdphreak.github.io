export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer (Contractor) - Food Truck Nerdz LLC",
      date: "Aug 2025 - Present | Memphis, TN",
      items: [
        "Co-founded the company in February 2025 with my brother",
        "Became the first paid contractor as software developer",
        "Developing and maintaining the food truck tracking platform"
      ]
    },
    {
      title: "Reliability Analyst - ALSAC/St. Jude Children's Research Hospital",
      date: "Dec 2021 - Aug 2022 | Memphis, TN",
      items: [
        "Refined monitoring for mission-critical software systems",
        "Monitored SSH, web API health, and database values"
      ]
    },
    {
      title: "Python Developer - AAGoods LLC",
      date: "Aug 2018 - Oct 2018 | Memphis, TN",
      items: [
        "Developed conveyor belt automation and inventory software",
        "Learned Python on the job in 3 weeks"
      ]
    },
    {
      title: "Web Designer, App Developer - JORY Development",
      date: "Jan 2023 - Aug 2023 | Memphis, TN",
      items: [
        "Created websites for local businesses and a Food Truck Tracker App",
        "Used technologies like Flutter, Dart, Node.js, and MongoDB"
      ]
    }
  ];

  return (
    <div class="card">
      <h2 class="section-heading">Experience</h2>
      
      <div class="flex">
        <div class="flex flex-col items-center mr-4">
          <div class="experience-timeline flex-1"></div>
        </div>
        
        <div class="space-y-8 flex-1">
          {experiences.map((exp, index) => (
            <div class="relative flex items-start">
              <div class="experience-bullet"></div>
              <div class="flex-1 ml-8">
                <h3 class="section-heading-sm">
                  {exp.title}
                </h3>
                <p class="text-subtle text-sm mb-4">
                  {exp.date}
                </p>
                <ul class="space-y-2">
                  {exp.items.map((item) => (
                    <li class="flex items-start">
                      <span class="experience-description-bullet">•</span>
                      <span class="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { useState } from 'react';

const Info = () => {
  const topics = [
    {
      id: 1,
      title: 'Liquid Media',
      content: `Content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ratione ducimus veritatis voluptatem sint quibusdam
              laudantium. Ad veniam maxime tenetur itaque libero cumque, quod
              eius, labore tempora sit voluptas totam nihil quaerat neque non
              cum doloribus, laborum rem nemo sint nulla vel at numquam soluta.
              Cupiditate molestias veniam quisquam dolor, ex explicabo tempora
              rerum laboriosam, facilis id quas iusto rem consequuntur eveniet
              animi velit dignissimos. Pariatur porro sit sunt accusamus amet
              totam dignissimos? Nulla alias id tempora praesentium rerum dolor
              rem eos dignissimos consectetur odio dolorem aspernatur maiores
              aliquam incidunt voluptate temporibus repudiandae delectus illo
              quos, animi perferendis. Expedita, dolorum.
    `,
    },
    { id: 2, title: 'Solid Media', content: 'Content 2' },
    { id: 3, title: 'SemiSolid Media', content: 'Content 3' },
    { id: 4, title: 'Primary cell culture Media', content: 'Content 4' },
    { id: 5, title: 'Transformed cell culture Media', content: 'Content 5' },
    { id: 6, title: 'Self renewing culture Media', content: 'Content 6' },
  ];

  const [selectedTopic, setSelectedTopic] = useState('Liquid Media');

  const getTopicContent = (title) => {
    const topic = topics.find((topic) => topic.title === title);
    return topic.content;
  };

  return (
    <>
      <div className="parent flex flex-row mt-5 gap-6">
        <div className="left flex-1">
          <div className="content flex flex-col bg-[#000000e2] justify-center items-start text-white p-3">
            {topics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic.title)}
                className={`topic ${
                  topic.title === selectedTopic && 'text-green-500'
                }`}
              >
                {topic.title}
              </div>
            ))}
            {/* <div className="topic">Liquid Media</div>
            <div className="topic">Solid Media</div>
            <div className="topic">Semisolid Media</div>
            <div className="topic">Primary cell culture Media</div>
            <div className="topic">Transformed cell culture Media</div>
            <div className="topic">Self renewing culture Media</div> */}
          </div>
        </div>
        <div className="right flex-1">
          <div className="content">
            <p>{getTopicContent(selectedTopic)}</p>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ratione ducimus veritatis voluptatem sint quibusdam
              laudantium. Ad veniam maxime tenetur itaque libero cumque, quod
              eius, labore tempora sit voluptas totam nihil quaerat neque non
              cum doloribus, laborum rem nemo sint nulla vel at numquam soluta.
              Cupiditate molestias veniam quisquam dolor, ex explicabo tempora
              rerum laboriosam, facilis id quas iusto rem consequuntur eveniet
              animi velit dignissimos. Pariatur porro sit sunt accusamus amet
              totam dignissimos? Nulla alias id tempora praesentium rerum dolor
              rem eos dignissimos consectetur odio dolorem aspernatur maiores
              aliquam incidunt voluptate temporibus repudiandae delectus illo
              quos, animi perferendis. Expedita, dolorum.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ratione ducimus veritatis voluptatem sint quibusdam
              laudantium. Ad veniam maxime tenetur itaque libero cumque, quod
              eius, labore tempora sit voluptas totam nihil quaerat neque non
              cum doloribus, laborum rem nemo sint nulla vel at numquam soluta.
              Cupiditate molestias veniam quisquam dolor, ex explicabo tempora
              rerum laboriosam, facilis id quas iusto rem consequuntur eveniet
              animi velit dignissimos. Pariatur porro sit sunt accusamus amet
              totam dignissimos? Nulla alias id tempora praesentium rerum dolor
              rem eos dignissimos consectetur odio dolorem aspernatur maiores
              aliquam incidunt voluptate temporibus repudiandae delectus illo
              quos, animi perferendis. Expedita, dolorum.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ratione ducimus veritatis voluptatem sint quibusdam
              laudantium. Ad veniam maxime tenetur itaque libero cumque, quod
              eius, labore tempora sit voluptas totam nihil quaerat neque non
              cum doloribus, laborum rem nemo sint nulla vel at numquam soluta.
              Cupiditate molestias veniam quisquam dolor, ex explicabo tempora
              rerum laboriosam, facilis id quas iusto rem consequuntur eveniet
              animi velit dignissimos. Pariatur porro sit sunt accusamus amet
              totam dignissimos? Nulla alias id tempora praesentium rerum dolor
              rem eos dignissimos consectetur odio dolorem aspernatur maiores
              aliquam incidunt voluptate temporibus repudiandae delectus illo
              quos, animi perferendis. Expedita, dolorum.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

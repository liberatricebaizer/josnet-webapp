import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";
import event from "../../redux/reducers/event";
import Loader from "../../layout/Loader";
import Header from "../../layout/Header";

const Events = () => {
  const [data, setData] = useState([]);
  const { allEvents, isLoading } = useSelector((state) => state.events);

  useEffect(() => {
    if (allEvents) {
      console.log("Events:", allEvents);

      const allEventsData = allEvents ? [...allEvents] : [];
      console.log("All Events:", allEventsData);

      const sortedEvents = allEventsData.sort(
        (a, b) => b.sold_out - a.sold_out
      );
      console.log("Sorted Events:", sortedEvents);
      const firstFive = sortedEvents.slice(0, 5);
      console.log("Top 5 Events:", firstFive);

      setData(firstFive);
    }
  }, [allEvents]);

  // useEffect(() => {
  //   console.log("Events:", allEvents);

  //   const allEvents = allEvents ? [...allEvents] : [];
  //   console.log("All Events:", allEvents);

  //   const sortedEvents = allEvents.sort((a, b) => b.sold_out - a.sold_out);
  //   console.log("Sorted Events:", sortedEvents);

  //   const firstFive = sortedEvents.slice(0, 5);
  //   console.log("Top 5 Events:", firstFive);

  //   setData(firstFive);
  // }, [allEvents]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${styles.section}`}>
          {/* <Header activeHeading={4} /> */}
          <div className={`${styles.heading} text-black`}>
            <h1>Popular Events</h1>
          </div>

          <div className="w-full grid">
            {data && data.length !== 0 ? (
              data.map((i, index) => <EventCard data={i} key={index} />)
            ) : (
              <p>No Events have!</p>
            )}

            {/* {events.length !== 0 && <EventCard data={events[0]} />}
            {events.length === 0 && <h4>No Events have!</h4>} */}
          </div>
        </div>
      )}
    </>
  );
};

export default Events;

// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../styles/styles";
// import EventCard from "./EventCard";

// const Events = () => {
//   const { allEvents, isLoading } = useSelector((state) => state.events);
//   console.log("Events:", allEvents);
//   return (
//     <div>
//       {!isLoading && (
//         <div className={`${styles.section}`}>
//           <div className={`${styles.heading}`}>
//             <h1>Popular Events</h1>
//           </div>

//           <div className="w-full grid">
//             {allEvents.length !== 0 && (
//               <EventCard data={allEvents && allEvents[0]} />
//             )}
//             <h4>{allEvents?.length === 0 && "No Events have!"}</h4>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;

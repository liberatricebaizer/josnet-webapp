import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../layout/Header";
import Loader from "../layout/Loader";
import Footer from "../layout/Footer";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  console.log("Events:", allEvents);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <br />
          <br />
          <div>
            <EventCard active={true} data={allEvents && allEvents[0]} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default EventsPage;

import React from "react";

function Intro() {
  return (
    <div
      className="flex items-center justify-center 
        flex-col text-center pt-20 pb-6"
    >
      <h1 className="text-5xl md:text-7x1 dark:test-white mb-1 md:mb-3 font-bold">
        Carlos Villarreal
      </h1>
      <p className="text-xl md:text-x1 mb-3 font-medium">
        Full Stack Software Engineer
      </p>
      <p className="text-md max-w-xl mb-6 font-base">
        Hi there, thanks for stopping by! Below is a sample of some of the
        projects I've worked on. Most of these projects were completed in an
        agile team setting. My main Stack is{" "}
        <strong>
          React, JavaScript / TypeScript, Node, PostgreSQL, and MongoDB.
        </strong>{" "}
        But I'm familiar and comfortable working with other technologies as
        well. As an engineer I am guided by the principal of{" "}
        <i>
          <u>being as efficient as possible</u>
        </i>{" "}
        and am always seeking to constantly improve, and evolve my skillset to
        deliver bug-free software.
      </p>
    </div>
  );
}

export default Intro;

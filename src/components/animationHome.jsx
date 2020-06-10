import React from "react";
import { useSpring, animated } from "react-spring";
import range from "lodash/range";
import { Link, useParams } from "react-router-dom";
import datasTest from "./../Datas/datas-test.json";

const items = range(5);
const interp = (i) => (r) =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

export default function AnimationHome() {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });

  return (
    <div className="top-home">
      <div className="underline">Latest Works </div>
      <div className="full-anim">
        {datasTest.map((i) => (
          <div className="content-move">
            <Link to={i.link}>
              <animated.div
                key={i.id}
                className="script-bf-box"
                style={{ transform: radians.interpolate(interp(i.id)) }}
              >
                <div className="test-image">
                  <img src={require(`../visuels/${i.overviewLink}`)} />
                </div>
              </animated.div>
            </Link>
          </div>
        ))}
      </div>
      <div className="arrow">Scroll</div>
    </div>
  );
}

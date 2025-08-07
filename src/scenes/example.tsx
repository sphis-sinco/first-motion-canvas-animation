import {Circle, makeScene2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here

  const circle = createRef<Circle>();

  view.add(<Circle ref={circle} size={320} fill={'green'} />);

  yield* circle().scale(2, 2).to(1, 2);

  yield* circle().fill('#e6a700', 1).to('#e13238', 1);
  yield* circle().position.x(300, 1).to(-300, 1);
  yield* circle().position.x(-300, 1).to(300, 1);
  yield* circle().fill('#e13238', 1).to('#e6a700', 1);

});

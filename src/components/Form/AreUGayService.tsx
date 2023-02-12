export interface IXY {
  x: number, y: number,
};

export const getNewPosition = (clientX: number, clientY: number, position: IXY): IXY => {
  const size = getWindowSize();
  let moveX = 0;
  let moveY = 0;
  const moveR = checkCanMove(clientX, size.x, 'rd');
  const moveL = checkCanMove(clientX, 0, 'ul');
  const moveD = checkCanMove(clientY, size.y, 'rd');
  const moveU = checkCanMove(clientY, 0, 'ul');

  if (moveR && moveL) {
    if (getRandomBoolean()) {
      moveX = position.x + getRandomInt(50, 70);
    } else {
      moveX = position.x + getRandomInt(-70, -50);
    }
  } else if (moveR) {
    moveX = position.x + getRandomInt(50, 70);
  } else {
    moveX = position.x + getRandomInt(-70, -50);
  }

  if (moveU && moveD) {
    if (getRandomBoolean()) {
      moveY = position.y + getRandomInt(-70, -50);
    } else {
      moveY = position.y + getRandomInt(50, 70);
    }
  } else if (moveD) {
    moveY = position.y + getRandomInt(50, 70);
  } else {
    moveY = position.y + getRandomInt(-70, -50);
  }

  return { x: moveX, y: moveY };
};

function checkCanMove(clientPosition: number, windowColision: number, s: string) {
  switch (s) {
    case 'rd': if (clientPosition + 100 < windowColision) return true;
      break;
    case 'ul': if (windowColision < clientPosition - 100) return true;
      break;
    default: throw new Error('F');
  }
}

function getWindowSize(): IXY { return { x: window.innerWidth, y: window.innerHeight }; }

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomBoolean() { if (getRandomInt(0, 1) == 1) return true; }
export const spiralMatrix = function (arr) {
  let direct = "x";
  const side = {
    x: "start",
    y: "end"
  };

  const isDX = () => direct === "x";
  const isStart = () => side[direct] === "start";
  const changeSide = () => (side[direct] = isStart() ? "end" : "start");
  const changeDirect = () => (direct = isDX() ? "y" : "x");

  const getFromNested = (list) => {
    const r = list
      .map((el) => (isStart() ? el.shift() : el.pop()))
      .filter((el) => el !== undefined);
    return isStart() ? r.reverse() : r;
  };

  const flat = (arr) => {
    return arr.reduce((acc, current) => {
      if (Array.isArray(current)) {
        acc.push(...flat(current));
      } else {
        acc.push(current);
      }
      return acc;
    }, []);
  };

  const result = [];
  const count = arr.length + (arr[0].length - 1);

  for (let i = 0; i < count; i++) {
    if (isDX()) {
      if (isStart()) {
        const v = arr.shift();
        console.log("v1 : ", v);

        v && result.push(v);
      } else {
        const v = arr.pop();
        console.log("v2 : ", v);
        v && result.push(v.reverse());
      }
    } else {
      const v = getFromNested(arr);
      console.log("v3 : ", v);
      v && result.push(v);
    }
    changeSide();
    changeDirect();
  }
  return flat(result);
};
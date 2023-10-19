import { useMemo, useDeferredValue } from "react";

const LIST_SIZE = 20000;

export function ListSlow({ input }) {
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{input}</div>);
    }
    return l;
  }, [input]);
  return <div>{list}</div>;
}

export function ListDeferred({ input }) {
  const defferedInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{defferedInput}</div>);
    }
    return l;
  }, [defferedInput]);
  return <div>{list}</div>;
}

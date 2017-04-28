export default function fetchComponentData (dispatch, components, params, query) {
  const needs = components.reduce( (prev, current) => {

    return current ? (current.needs || []).concat(prev) : prev;
  }, []);

  const promises = needs.reverse().map(need => dispatch(need(params, query)));

  return Promise.all(promises);
}